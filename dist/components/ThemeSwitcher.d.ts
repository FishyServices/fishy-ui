import * as React from "react";
export interface ThemeSwitcherOption {
    value: string;
    label: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
export interface ThemeSwitcherProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
    onValueChange: (value: string) => void;
    options?: ThemeSwitcherOption[];
}
declare function ThemeSwitcher({ className, value, onValueChange, options, ...props }: ThemeSwitcherProps): import("react/jsx-runtime").JSX.Element;
export { ThemeSwitcher };
