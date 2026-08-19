"use client";

/**
 * "Lite" devices take the cheap end of every trade-off in the hero scene:
 * unlit materials, no per-frame rotation, no MSAA, a capped pixel ratio.
 *
 * Resolved once and cached — the check this replaces ran a user-agent regex
 * inside useFrame, so it fired a dozen times per frame for the life of the
 * page. Coarse pointer catches the tablets that lie about their user agent
 * (iPadOS reports itself as a Mac) but keeps touch-capable laptops, whose
 * primary pointer is still fine, on the full scene.
 */
let cached;

export const isLiteDevice = () => {
  if (cached !== undefined) return cached;
  if (typeof window === "undefined") return true;

  cached =
    window.matchMedia("(pointer: coarse)").matches ||
    /Mobi|Android/i.test(navigator.userAgent);

  return cached;
};
