import { useState, useRef, useEffect } from "react";

type UseOutlineSpyProps = {
  onChange: (elements: {text: string, id: string}[]) => void;
};

const useOutlineSpy = ({ onChange }: UseOutlineSpyProps) => {
  const [targets, setTargets] = useState<Element[]>([]);
  const intersectionObserver = useRef<IntersectionObserver>(null);

  useEffect(() => {
    if (intersectionObserver.current) {
      targets.forEach((element) =>
        intersectionObserver.current!.observe(element),
      );
    }
  }, [targets]);

  useEffect(() => {
    let elementsIn: Element[] = [];
    intersectionObserver.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const disappearsBelow = entry.boundingClientRect.bottom < (entry.rootBounds?.top ?? 0)
          if (entry.isIntersecting) {
            elementsIn = [...elementsIn.filter(element => element.id !== entry.target.id), entry.target];
          } else if (!entry.isIntersecting && !disappearsBelow) {
            elementsIn = elementsIn.filter((element) => element.id !== entry.target.id);
          }
          onChange(elementsIn.map(element => ({text: element.textContent!, id: element.id})));
        });
      },
      {
        rootMargin: `0px 0px -50% 0px`,
      },
    );
    return () => intersectionObserver.current!.disconnect();
  });

  return {
    observe(target: Element) {
      setTargets((prevState) => [...prevState, target]);
    },
  };
};

export default useOutlineSpy;
