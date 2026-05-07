import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";

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

const DEFAULT_OPTIONS: ThemeSwitcherOption[] = [
  { value: "dark", label: "Dark", icon: Moon },
  { value: "light", label: "Light", icon: Sun }
];

function ThemeSwitcher({
  className,
  value,
  onValueChange,
  options = DEFAULT_OPTIONS,
  ...props
}: ThemeSwitcherProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-lg border border-border bg-muted/65 p-1",
        className
      )}
      role="radiogroup"
      aria-label="Theme"
      {...props}
    >
      {options.map((option) => {
        const Icon = option.icon;
        const active = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={active}
            className={cn(
              "inline-flex min-w-[6.75rem] items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              active
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:bg-background/70 hover:text-foreground"
            )}
            onClick={() => onValueChange(option.value)}
          >
            {Icon ? <Icon className="h-4 w-4" /> : null}
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export { ThemeSwitcher };
