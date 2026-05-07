import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";
const DEFAULT_OPTIONS = [
    { value: "dark", label: "Dark", icon: Moon },
    { value: "light", label: "Light", icon: Sun }
];
function ThemeSwitcher({ className, value, onValueChange, options = DEFAULT_OPTIONS, ...props }) {
    return (_jsx("div", { className: cn("inline-flex items-center gap-1 rounded-lg border border-border bg-muted/65 p-1", className), role: "radiogroup", "aria-label": "Theme", ...props, children: options.map((option) => {
            const Icon = option.icon;
            const active = option.value === value;
            return (_jsxs("button", { type: "button", role: "radio", "aria-checked": active, className: cn("inline-flex min-w-[6.75rem] items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors", active
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-background/70 hover:text-foreground"), onClick: () => onValueChange(option.value), children: [Icon ? _jsx(Icon, { className: "h-4 w-4" }) : null, _jsx("span", { children: option.label })] }, option.value));
        }) }));
}
export { ThemeSwitcher };
