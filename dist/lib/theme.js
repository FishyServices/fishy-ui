export const FISHY_THEME_DEFAULTS = {
    mode: "dark",
    density: "comfortable",
    radius: "rounded",
    accent: "indigo"
};
export function applyFishyTheme(options = {}) {
    const root = options.root ?? document.documentElement;
    const mode = options.mode ?? FISHY_THEME_DEFAULTS.mode;
    const density = options.density ?? FISHY_THEME_DEFAULTS.density;
    const radius = options.radius ?? FISHY_THEME_DEFAULTS.radius;
    const accent = options.accent ?? FISHY_THEME_DEFAULTS.accent;
    root.dataset.theme = mode;
    if (density === "comfortable") {
        delete root.dataset.fishyDensity;
    }
    else {
        root.dataset.fishyDensity = density;
    }
    root.dataset.fishyRadius = radius;
    root.dataset.fishyAccent = accent;
}
