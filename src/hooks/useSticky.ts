import { useEffect, useMemo } from "react";
import { useInView, useSpringValue } from "@react-spring/web";

const useSticky = (
  { scrollContainer }: { scrollContainer?: HTMLElement } = {},
) => {
  const [ref, inView] = useInView();
  const scrollY = useSpringValue(0);

  const progress = useMemo(
    () =>
      scrollY.to((y) => {
        if (!ref.current) return 0;

        const { offsetTop, scrollHeight } = ref.current as HTMLDivElement;

        return (y - offsetTop) / scrollHeight;
      }),
    [ref, scrollY],
  );

  useEffect(() => {
    if (!inView) return;

    const ctrler = new AbortController();
    const container = scrollContainer ?? document.getElementById(
      "[[SCROLL-CONTAINER]]",
    ) as HTMLElement;

    if (!container) return;

    container.addEventListener(
      "scroll",
      () => scrollY.start(container.scrollTop),
      {
        signal: ctrler.signal,
      },
    );

    return () => ctrler.abort();
  }, [inView, scrollContainer, scrollY]);

  return { ref, progress, inView };
};

export default useSticky;
