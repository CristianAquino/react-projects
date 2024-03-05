import { useEffect, useRef, useState } from "react";

type useIntersectionObserverProps = {
  distance: string;
  threshold: number;
};

export function useIntersectionObserver({
  distance = "100px",
  threshold = 1,
}: Partial<useIntersectionObserverProps>) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<any>(null);

  useEffect(() => {
    function onIntersection(entries: IntersectionObserverEntry[]) {
      const el = entries[0];
      setIsIntersecting(el.isIntersecting);
    }
    const observer = new IntersectionObserver(onIntersection, {
      rootMargin: distance,
      threshold,
    });

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [elementRef]);

  return { isIntersecting, elementRef };
}
