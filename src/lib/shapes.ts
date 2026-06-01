/* Procedural recreations of the app's MaterialShapes polygons (Cookie, Clover,
   Sunny, ...) as smooth SVG path data. The Android app clips brand surfaces — the
   AI avatar, the empty-state hero — to these morphing polygons; we mirror that on
   the web with closed Catmull-Rom paths through alternating outer/inner radii. */

type Pt = [number, number];

/** Closed smooth path through points using a Catmull-Rom -> cubic Bezier spline. */
function smoothClosed(pts: Pt[], tension = 1): string {
  const n = pts.length;
  if (n < 3) return '';
  let d = `M ${pts[0][0].toFixed(2)} ${pts[0][1].toFixed(2)} `;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    const c1x = p1[0] + ((p2[0] - p0[0]) / 6) * tension;
    const c1y = p1[1] + ((p2[1] - p0[1]) / 6) * tension;
    const c2x = p2[0] - ((p3[0] - p1[0]) / 6) * tension;
    const c2y = p2[1] - ((p3[1] - p1[1]) / 6) * tension;
    d += `C ${c1x.toFixed(2)} ${c1y.toFixed(2)} ${c2x.toFixed(2)} ${c2y.toFixed(2)} ${p2[0].toFixed(2)} ${p2[1].toFixed(2)} `;
  }
  return d + 'Z';
}

/** Flower / scalloped "cookie" — `petals` bumps alternating outer/inner radius. */
export function flower(petals: number, outer = 50, inner = 40, cx = 50, cy = 50): string {
  const pts: Pt[] = [];
  const total = petals * 2;
  for (let i = 0; i < total; i++) {
    const a = (i / total) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 === 0 ? outer : inner;
    pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
  }
  return smoothClosed(pts);
}

/** Four-leaf clover — four round lobes joined by narrow necks. Each lobe gets a
 *  pair of outer points so its top reads as a rounded leaf, not a sharp star. */
export function clover(cx = 50, cy = 50): string {
  const pts: Pt[] = [];
  const outer = 50;
  const neck = 26;
  const spread = (28 * Math.PI) / 180; // half-width of each lobe in radians
  for (let i = 0; i < 4; i++) {
    const center = (i / 4) * Math.PI * 2 - Math.PI / 2;
    pts.push([cx + Math.cos(center - spread) * outer, cy + Math.sin(center - spread) * outer]);
    pts.push([cx + Math.cos(center + spread) * outer, cy + Math.sin(center + spread) * outer]);
    const gap = center + Math.PI / 4; // neck between this lobe and the next
    pts.push([cx + Math.cos(gap) * neck, cy + Math.sin(gap) * neck]);
  }
  return smoothClosed(pts);
}

/** Sunny — a 12-bump gentle scallop (the app's hero shape). */
export const sunny = () => flower(12, 50, 41);

/** Cookie variants. */
export const cookie9 = () => flower(9, 50, 39);
export const cookie12 = () => flower(12, 50, 43);

/** A soft, asymmetric organic blob for ambient background glows. */
export function blob(seed = 1, points = 7): string {
  const pts: Pt[] = [];
  const rnd = (i: number) => {
    const x = Math.sin(seed * 12.9898 + i * 78.233) * 43758.5453;
    return x - Math.floor(x);
  };
  for (let i = 0; i < points; i++) {
    const a = (i / points) * Math.PI * 2;
    const r = 30 + rnd(i) * 18;
    pts.push([50 + Math.cos(a) * r, 50 + Math.sin(a) * r]);
  }
  return smoothClosed(pts);
}
