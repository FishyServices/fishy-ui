export type FishyThemeMode = "dark" | "light";
export type FishyThemeDensity = "compact" | "comfortable" | "touch";
export type ApplyFishyThemeOptions = {
    mode?: FishyThemeMode;
    density?: FishyThemeDensity;
    root?: HTMLElement;
};
export declare const FISHY_THEME_DEFAULTS: Required<Omit<ApplyFishyThemeOptions, "root">>;
export declare function applyFishyTheme(options?: ApplyFishyThemeOptions): void;
