// Colour helpers + presets used by the theme engine and the Appearance panel.
export const PRESETS = [
  { name: "Navy & Gold", primary: "#0b3558", accent: "#b18a3b" },
  { name: "Emerald", primary: "#047857", accent: "#d97706" },
  { name: "Indigo", primary: "#4338ca", accent: "#0ea5e9" },
  { name: "Royal Purple", primary: "#6d28d9", accent: "#ec4899" },
  { name: "Crimson", primary: "#be123c", accent: "#f59e0b" },
  { name: "Ocean Teal", primary: "#0f766e", accent: "#f97316" },
  { name: "Graphite", primary: "#1f2937", accent: "#22c55e" },
  { name: "Sunset", primary: "#c2410c", accent: "#0891b2" }
];

export const hexToRgb = (hex) => {
  let h = String(hex || "").replace("#", "");
  if (h.length === 3) h = [...h].map((c) => c + c).join("");
  if (!/^[0-9a-f]{6}$/i.test(h)) return [11, 53, 88];
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};
const mix = (a, b, t) => a.map((v, i) => Math.round(v * (1 - t) + b[i] * t));
const lum = ([r, g, b]) => {
  const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};
const WHITE = [255, 255, 255], BLACK = [0, 0, 0], INK = [16, 24, 40], DARK_SURFACE = [17, 24, 39];
const fgFor = (c) => (lum(c) > 0.42 ? INK : WHITE);
const css = (c) => c.join(" ");

/** Returns the CSS variables for a palette in light or dark mode, with readable contrast. */
export function buildVars(primaryHex, accentHex, dark) {
  const p0 = hexToRgb(primaryHex);
  let p = p0, a = hexToRgb(accentHex);
  const pl = lum(p0), al = lum(a);
  if (dark && pl < 0.12) p = mix(p0, WHITE, 0.4); // very dark primaries vanish on dark backgrounds

  const brand = dark ? mix(p0, WHITE, pl < 0.35 ? 0.55 : 0.2) : (pl > 0.6 ? mix(p0, BLACK, 0.35) : p0);
  const soft = dark ? mix(p0, DARK_SURFACE, 0.82) : mix(p0, WHITE, 0.9);
  const accentText = dark ? mix(a, WHITE, al < 0.3 ? 0.3 : 0.1) : (al > 0.35 ? mix(a, BLACK, 0.35) : a);

  return {
    "--primary": css(p), "--primary-fg": css(fgFor(p)),
    "--accent": css(a), "--accent-fg": css(fgFor(a)),
    "--brand": css(brand), "--brand-soft": css(soft), "--accent-text": css(accentText)
  };
}
