import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Moon, Sun } from "lucide-react";
import { cn } from "../../lib/utils";
const defaultOptions = [
    { value: "dark", label: "Dark", icon: Moon },
    { value: "light", label: "Light", icon: Sun }
];
function ThemeSwitcher({ className, value, onValueChange, options = defaultOptions, ...props }) {
    return (_jsx("div", { className: cn("inline-flex items-center gap-1 rounded-lg border bg-muted p-1", className), role: "radiogroup", "aria-label": "Theme", ...props, children: options.map(({ value: optionValue, label, icon: Icon }) => (_jsxs("button", { type: "button", role: "radio", "aria-checked": optionValue === value, className: cn("inline-flex min-w-27 items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium", optionValue === value
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:bg-background/70 hover:text-foreground"), onClick: () => onValueChange(optionValue), children: [Icon ? _jsx(Icon, { className: "size-4" }) : null, _jsx("span", { children: label })] }, optionValue))) }));
}
export { ThemeSwitcher };
