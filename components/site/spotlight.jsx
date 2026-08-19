"use client";

import { useCallback, useRef } from "react";

/**
 * Cursor-tracked accent wash on the card copy. The photo is left alone.
 */
const Spotlight = ({ as: Tag = "div", className = "", children, ...props }) => {
  const ref = useRef(null);

  // mousemove rather than pointermove: same result for a mouse, and it also
  // fires under automation and in browsers with patchy pointer support.
  const handleMove = useCallback((event) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  }, []);

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      className={`card-spot ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Spotlight;
