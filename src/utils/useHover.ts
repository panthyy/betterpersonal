import { RefObject, useEffect, useState } from "react";

export const useHover = (Ref: RefObject<HTMLElement>) => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!Ref.current) return;

    const onMouseEnter = () => setHovered(true);
    const onMouseLeave = () => setHovered(false);

    Ref.current.addEventListener("mouseenter", onMouseEnter);
    Ref.current.addEventListener("mouseleave", onMouseLeave);

    return () => {
      Ref.current?.removeEventListener("mouseenter", onMouseEnter);
      Ref.current?.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [Ref]);

  return hovered;
};
