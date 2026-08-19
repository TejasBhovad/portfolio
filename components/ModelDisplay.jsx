"use client";

import {
  memo,
  Suspense,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Canvas, useThree } from "@react-three/fiber";
import Sphere from "@/components/Sphere";
import RingSpheres from "@/components/RingSpheres";
import { heroFraming } from "@/lib/hero-framing";
import { isLiteDevice } from "@/lib/device";

const MemoizedSphere = memo(Sphere);
const MemoizedRingSpheres = memo(RingSpheres);

/**
 * On-demand rendering draws nothing unless something asks it to. Ask once the
 * textures are in and again on every resize, so a dropped invalidation can
 * never leave the hero as an empty canvas.
 */
const DemandPainter = () => {
  const invalidate = useThree((s) => s.invalidate);
  const width = useThree((s) => s.size.width);
  const height = useThree((s) => s.size.height);

  useEffect(() => {
    invalidate();
    const id = requestAnimationFrame(() => invalidate());
    return () => cancelAnimationFrame(id);
  }, [invalidate, width, height]);

  return null;
};

/**
 * Lighting is the expensive half of this scene: every light multiplies the
 * fragment work of the standard materials, and the core sphere covers a big
 * share of the viewport. Phones keep only the two lights that actually shape
 * it — the key from above and the fill that lights its lower front.
 */
const Scene = memo(({ lite }) => (
  <>
    <ambientLight intensity={1.75} />
    <directionalLight position={[0, 10, 5]} intensity={1} />
    <pointLight position={[0, -2, 4]} intensity={10} />
    {!lite && (
      <>
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={2}
          intensity={1}
        />
        <pointLight position={[-10, -10, -10]} decay={2} intensity={1} />
      </>
    )}
    <Suspense fallback={null}>
      <MemoizedSphere
        position={[2, 0, 0]}
        size={[1.25, 32, 32]}
        color="#44B1FF"
      />
      <MemoizedRingSpheres
        position={[2, -0.75, 0]}
        size={[1.5, 0.1, 1, 50]}
        color="#2B6CB0"
      />
      {lite && <DemandPainter />}
    </Suspense>
  </>
));
Scene.displayName = "Scene";

/** "<T>" renders ~2.07x its font size wide; hold it at 60% of the sphere. */
const MARK_RATIO = 0.6 / 2.07;

/**
 * The signature object. Deferred until after mount so it never blocks
 * first paint, and skipped entirely for reduced-motion visitors — the
 * static fallback carries the same mark.
 */
const ModelDisplay = () => {
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [framing, setFraming] = useState(null);
  const [onScreen, setOnScreen] = useState(true);
  const stageRef = useRef(null);
  const lite = isLiteDevice();

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    setReady(true);
    const onChange = (e) => setReduced(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // The mark is DOM, the sphere is WebGL — measure the stage so the two stay
  // locked together instead of drifting apart at the size extremes. Measure
  // up front rather than waiting on the observer's first tick, which a
  // backgrounded tab can sit on indefinitely.
  useLayoutEffect(() => {
    const node = stageRef.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    setFraming(heroFraming(rect.width, rect.height));

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setFraming(heroFraming(width, height));
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Nothing below the fold should be paying for a scene nobody can see —
  // this is most of the cost of scrolling the page on a phone.
  useEffect(() => {
    const node = stageRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      { rootMargin: "150px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const spherePx = framing?.spherePx ?? 0;

  return (
    <div className="absolute inset-0" ref={stageRef}>
      {/* Atmosphere, sized off the sphere so it stays a halo rather than a
          patch of colour behind a box. Painted before the canvas, so the
          sphere occludes the middle of it. */}
      <div
        className="hero-halo"
        style={{
          top: `${framing?.sphereCenterPct ?? 45}%`,
          "--halo-size": `${Math.round(spherePx)}px`,
        }}
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
      </div>

      {/* Sits on the sphere. Shadow keeps the mark legible in light mode. */}
      <span
        className="pointer-events-none absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 select-none font-black leading-none text-white [text-shadow:0_2px_28px_rgba(12,74,110,0.5)]"
        style={{
          top: `${framing?.sphereCenterPct ?? 45}%`,
          fontSize: `${Math.round(spherePx * MARK_RATIO)}px`,
          opacity: framing ? 1 : 0,
        }}
        aria-hidden="true"
      >
        {"<T>"}
      </span>

      {ready && !reduced ? (
        <Canvas
          className="h-full w-full"
          style={{ background: "transparent" }}
          camera={{ position: [2, 0, 6], fov: 42, near: 0.1, far: 40 }}
          /* Nothing on a phone animates, so draw once and stop; off-screen,
             stop entirely. Only the desktop scene needs a running loop. */
          frameloop={!onScreen ? "never" : lite ? "demand" : "always"}
          dpr={lite ? [1, 1.5] : [1, 1.75]}
          gl={{
            antialias: !lite, // MSAA is one of the costliest things on mobile GPUs
            alpha: true,
            powerPreference: lite ? "default" : "high-performance",
          }}
        >
          <Scene lite={lite} />
        </Canvas>
      ) : (
        <div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#44B1FF]"
          style={{
            top: `${framing?.sphereCenterPct ?? 45}%`,
            height: spherePx,
            width: spherePx,
            boxShadow: "0 0 90px rgba(68,177,255,0.35)",
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default memo(ModelDisplay);
