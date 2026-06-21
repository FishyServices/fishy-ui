export type FishyThemeMode = "dark" | "light";
export type FishyThemeDensity = "compact" | "comfortable" | "touch";
export type FishyThemeRadius = "sharp" | "rounded" | "playful";
export type FishyThemeAccent = "cyan" | "indigo" | "rose" | "emerald";
export type ApplyFishyThemeOptions = {
    mode?: FishyThemeMode;
    density?: FishyThemeDensity;
    radius?: FishyThemeRadius;
    accent?: FishyThemeAccent;
    root?: HTMLElement;
};
export declare const FISHY_THEME_DEFAULTS: Required<Omit<ApplyFishyThemeOptions, "root">>;
export declare function applyFishyTheme(options?: ApplyFishyThemeOptions): void;
