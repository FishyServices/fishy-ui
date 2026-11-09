import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

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

const defaultOptions: ThemeSwitcherOption[] = [
  { value: "dark", label: "Dark", icon: Moon },
  { value: "light", label: "Light", icon: Sun }
];

function ThemeSwitcher({
  className,
  value,
  onValueChange,
  options = defaultOptions,
  ...props
}: ThemeSwitcherProps) {
  return (
    <div
      className={cn("inline-flex items-center gap-1 rounded-lg border bg-muted p-1", className)}
      role="radiogroup"
      aria-label="Theme"
      {...props}
    >
      {options.map(({ value: optionValue, label, icon: Icon }) => (
        <button
          key={optionValue}
          type="button"
          role="radio"
          aria-checked={optionValue === value}
          className={cn(
            "inline-flex min-w-27 items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium",
            optionValue === value
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:bg-background/70 hover:text-foreground"
          )}
          onClick={() => onValueChange(optionValue)}
        >
          {Icon ? <Icon className="size-4" /> : null}
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}

export { ThemeSwitcher };
