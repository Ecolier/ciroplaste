import _ from "lodash";
import { Ref, RefObject, useEffect, useState } from "react";

interface ElementRefList {
  [key: string]: RefObject<HTMLElement>;
}

interface ScrollSpyProps {
  elementRefs: ElementRefList;
  onFocus: (elementRefs: KeyedElements) => void;
  offset?: number;
}

type MinMaxPair = [minY: number, maxY: number];

export interface SpiedElement {
  key: number;
  tag: string;
  y: number;
  element: HTMLElement;
  ref: RefObject<HTMLElement>;
}

export type KeyedElements = {
  [key: string]: SpiedElement;
};

function useSpy({ elementRefs, onFocus, offset }: ScrollSpyProps) {
  const formatRefs = (elementRefs: ElementRefList): SpiedElement[] =>
    Object.entries(elementRefs).map(([key, ref]) => {
      const element = ref.current as HTMLHeadingElement;
      const elementTag = element.tagName;
      const elementBounds = element.getBoundingClientRect();
      return {
        ref,
        key: parseInt(key),
        tag: elementTag,
        y: (elementBounds.y + window.scrollY) - (offset ? offset + 1 : 0),
        element,
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
    spiedElements.reduce((map, { key, tag, y, element, ref }) => {
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
        ...{ [`${key}`]: { key, tag, y, element, ref } },
      });
      return map;
    }, new Map<MinMaxPair, KeyedElements[]>());

  const calculateMinMaxY = (zoneMap: Map<MinMaxPair, KeyedElements[]>) => minMaxPair (
    Array.from(zoneMap).flatMap(([key, _]) => key),
  );

  useEffect(() => {
    let formattedRefs: SpiedElement[]
    let zoneMap: Map<MinMaxPair, KeyedElements[]>
    let [globalMinY, globalMaxY]: MinMaxPair = [0, 0]
    let availableSpyZones: [MinMaxPair, KeyedElements[]][]

    const resizeObserver = new ResizeObserver((entries) => {
      formattedRefs = formatRefs(elementRefs);
      zoneMap = calculateSpiedZones(formattedRefs);
      [globalMinY, globalMaxY] = calculateMinMaxY(zoneMap);
      availableSpyZones = Array.from(zoneMap);
    });

    resizeObserver.observe(document.body);

    let prevZoneIndex = -1;

    document.addEventListener(
      "scroll",
      _.throttle(() => {
        // Reset spied elements if we're out of scope
        if (window.scrollY < globalMinY || window.scrollY > globalMaxY) {
          if (prevZoneIndex === -1) {
            return;
          }
          onFocus([]);
          prevZoneIndex = -1;
          availableSpyZones = Array.from(zoneMap);
          return;
        }
        
        if (!availableSpyZones) {
          return
        }
        const currZoneIndex = availableSpyZones.findIndex(
          ([[minY, maxY]]) => window.scrollY > minY && window.scrollY < maxY,
        );

        // Don't process event if we haven't changed zones or can't find one
        if (prevZoneIndex === currZoneIndex || currZoneIndex === -1) {
          return;
        }

        prevZoneIndex = currZoneIndex;
        const currZone = availableSpyZones[currZoneIndex];
        const [[_minY, _maxY], spiedElements] = currZone;

        onFocus(spiedElements);

        let nextAvailableZones = [currZone];

        // Make available only neighboring zones
        const prevZone = availableSpyZones[currZoneIndex - 1];
        prevZone !== undefined && nextAvailableZones.push(prevZone);
        const nextZone = availableSpyZones[currZoneIndex + 1];
        nextZone !== undefined && nextAvailableZones.push(nextZone);
      }, 200),
      { passive: true }
    );

    return () => resizeObserver.disconnect();
  }, []);
}

export default useSpy;
