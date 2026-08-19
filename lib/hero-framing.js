/**
 * Shared framing math for the hero object.
 *
 * The stage is a fluid box — full-bleed and short on a phone, stretched to
 * the height of the copy column on desktop — but a perspective camera only
 * ever frames by its *vertical* field of view. A fixed distance therefore
 * either crops the ring on a narrow stage or blows the sphere up out of
 * scale on a tall one. So we solve for the distance that fits the whole
 * composition in whatever box we're handed, and derive the overlay type
 * size from the same numbers so the mark always tracks the sphere.
 */

// The ring lies flat, seen edge-on, so it spends its size on width: radius
// 1.5 plus the 0.3 spheres riding it, plus the perspective stretch on the
// near arc. Vertically it barely reaches past the sphere.
const CONTENT_HALF_WIDTH = 1.9;
const CONTENT_TOP = 1.25; // crown of the core sphere
const CONTENT_BOTTOM = -1.46; // near edge of the ring, foreshortened

const CONTENT_HALF_HEIGHT = (CONTENT_TOP - CONTENT_BOTTOM) / 2;

export const HERO_CENTER_X = 2;
const HERO_FOCUS_Y = (CONTENT_TOP + CONTENT_BOTTOM) / 2;
const SPHERE_DIAMETER = 2.5;

/** Breathing room around the composition, as a multiple of its extent. */
const PADDING = 1.22;

/** Wider lens on a phone so the object still reads at 320px. */
const heroFov = (width) => (width < 520 ? 50 : 42);

export function heroFraming(width, height) {
  const fov = heroFov(width);
  const aspect = width > 0 && height > 0 ? width / height : 1;
  const tan = Math.tan((fov * Math.PI) / 360);

  const distance = Math.max(
    (CONTENT_HALF_HEIGHT * PADDING) / tan,
    (CONTENT_HALF_WIDTH * PADDING) / (aspect * tan)
  );

  const visibleHeight = 2 * distance * tan;

  return {
    fov,
    distance,
    focusY: HERO_FOCUS_Y,
    /** Projected diameter of the core sphere, in CSS pixels. */
    spherePx: (SPHERE_DIAMETER / visibleHeight) * height,
    /** Where the sphere's centre lands, as a percentage of stage height. */
    sphereCenterPct: 50 + (HERO_FOCUS_Y / visibleHeight) * 100,
  };
}
