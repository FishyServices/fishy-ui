export type FishyThemeMode = "dark" | "light";
export type FishyThemeDensity = "compact" | "comfortable" | "touch";

export type ApplyFishyThemeOptions = {
  mode?: FishyThemeMode;
  density?: FishyThemeDensity;
  root?: HTMLElement;
};

export const FISHY_THEME_DEFAULTS: Required<Omit<ApplyFishyThemeOptions, "root">> = {
  mode: "dark",
  density: "comfortable"
};

export function applyFishyTheme(options: ApplyFishyThemeOptions = {}) {
  const root = options.root ?? document.documentElement;
  const mode = options.mode ?? FISHY_THEME_DEFAULTS.mode;
  const density = options.density ?? FISHY_THEME_DEFAULTS.density;

  root.dataset.theme = mode;

  if (density === "comfortable") {
    delete root.dataset.fishyDensity;
  } else {
    root.dataset.fishyDensity = density;
  }
}
