import { throttle } from "lodash";
import { RefObject, useEffect } from "react";

type ElementRefList = { key: string | number; element: HTMLElement }[];

interface ScrollSpyProps {
  containerRef: RefObject<HTMLElement>;
  elementRefs: { key: string | number; element: HTMLElement }[];
  onFocus: (elementRefs: KeyedElements) => void;
  staticOffset?: number;
  dynamicOffset?: () => number | undefined;
}

type MinMaxPair = [minY: number, maxY: number];

export interface SpiedElement {
  key: number;
  tag: string;
  y: number;
  element: HTMLElement;
}

export type KeyedElements = {
  [key: string]: SpiedElement;
};

function useSpy({
  containerRef,
  elementRefs,
  onFocus,
  staticOffset,
  dynamicOffset
}: ScrollSpyProps) {
  const formatRefs = (elementRefs: ElementRefList): SpiedElement[] =>
    elementRefs.map(({ key, element }) => {
      const elementTag = element.tagName;
      const elementBounds = element.getBoundingClientRect();
      return {
        element,
        key: typeof key === "string" ? parseInt(key) : key,
        tag: elementTag,
        y:
          elementBounds.y +
          containerRef.current!.scrollTop -
          (staticOffset ? staticOffset : 0),
      };
    });

  const findClosing = (
    elementRefs: SpiedElement[],
    withKey: number,
    withTag?: string,
  ) => {
    return withTag !== undefined
      ? elementRefs.find(
          ({ key, tag }) => tag === withTag && key !== withKey && key > withKey,
        )
      : elementRefs.find(({ key }) => key !== withKey && key > withKey);
  };

  const filterAncestors = (elementRefs: SpiedElement[], elementY: number) =>
    elementRefs.filter(({ key, tag, y }) => {
      const closing = findClosing(elementRefs, key, tag);
      const endY = closing ? closing.y : Infinity;
      return elementY > y && elementY < endY;
    });

  const minMaxPair = (n: number[]): MinMaxPair => {
    return [Math.min(...n), Math.max(...n)];
  };

  const calculateSpiedZones = (
    spiedElements: SpiedElement[],
  ): Map<MinMaxPair, KeyedElements[]> =>
    spiedElements.reduce((map, { key, tag, y, element }) => {
      // Get every ancestors of element from its y position
      const ancestors = filterAncestors(spiedElements, y);

      let endY = Infinity;

      // Find closing element with matching tag
      const nextWithTag = findClosing(spiedElements, key, tag);
      if (nextWithTag) {
        endY = nextWithTag.y;

        // Or just the next element
      } else {
        const nextFallback = findClosing(spiedElements, key);
        if (nextFallback) {
          endY = nextFallback.y;
        }
      }

      const keyedAncestors = ancestors.reduce(
        (acc, spiedElement) => ({
          ...acc,
          [`${spiedElement.key}`]: spiedElement,
        }),
        {} as KeyedElements[],
      );

      map.set([y, endY], {
        ...keyedAncestors,
        ...{ [`${key}`]: { key, tag, y, element } },
      });
      return map;
    }, new Map<MinMaxPair, KeyedElements[]>());

  const calculateMinMaxY = (zoneMap: Map<MinMaxPair, KeyedElements[]>) =>
    minMaxPair(Array.from(zoneMap).flatMap(([key]) => key));

  useEffect(() => {
    let formattedRefs: SpiedElement[];
    let zoneMap: Map<MinMaxPair, KeyedElements[]>;
    let [globalMinY, globalMaxY]: MinMaxPair = [0, 0];
    let availableSpyZones: [MinMaxPair, KeyedElements[]][];

    const resizeObserver = new ResizeObserver(() => {
      formattedRefs = formatRefs(elementRefs);
      zoneMap = calculateSpiedZones(formattedRefs);
      [globalMinY, globalMaxY] = calculateMinMaxY(zoneMap);
      availableSpyZones = Array.from(zoneMap);
    });

    resizeObserver.observe(document.body);

    let prevZoneIndex = -1;

    const containerElem = containerRef.current!;

    containerElem.addEventListener(
      "scroll",
      throttle(() => {

        let offset = dynamicOffset && dynamicOffset() || 0;

        // Reset spied elements if we're out of scope
        if (
          containerElem.scrollTop + offset < globalMinY ||
          containerElem.scrollTop + offset > globalMaxY
        ) {
          if (prevZoneIndex === -1) {
            return;
          }
          onFocus([]);
          prevZoneIndex = -1;
          availableSpyZones = Array.from(zoneMap);
          return;
        }

        if (!availableSpyZones) {
          return;
        }

        const currZoneIndex = availableSpyZones.findIndex(
          ([[minY, maxY]]) =>
            containerElem.scrollTop + offset > minY && containerElem.scrollTop + offset < maxY,
        );

        // Don't process event if we haven't changed zones or can't find one
        if (prevZoneIndex === currZoneIndex || currZoneIndex === -1) {
          return;
        }

        prevZoneIndex = currZoneIndex;
        const currZone = availableSpyZones[currZoneIndex];
        const [, spiedElements] = currZone;

        onFocus(spiedElements);

        const nextAvailableZones = [currZone];

        // Make available only neighboring zones
        const prevZone = availableSpyZones[currZoneIndex - 1];
        if (prevZone !== undefined) nextAvailableZones.push(prevZone);
        const nextZone = availableSpyZones[currZoneIndex + 1];
        if (nextZone !== undefined) nextAvailableZones.push(nextZone);

        return;
      }, 200),
      { passive: true },
    );

    return () => resizeObserver.disconnect();
  }, [elementRefs]);
}

export default useSpy;
