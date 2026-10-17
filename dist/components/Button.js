import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { Button as BaseButton } from "@base-ui/react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
const buttonVariants = cva("inline-flex min-h-10 items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-[color,background-color,border-color,transform] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:translate-y-px [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-none hover:bg-primary/88",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-border bg-transparent shadow-none hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            fishy: "fishy-glass hover:bg-white/10 text-primary-foreground"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3 text-xs",
            lg: "h-12 rounded-lg px-8",
            icon: "h-11 w-11",
            "icon-sm": "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = React.forwardRef(({ className, variant, size, asChild = false, type = "button", children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, className }));
    return (_jsx(BaseButton, { className: classes, ref: ref, render: asChild && React.isValidElement(children) ? children : undefined, type: type, ...props, children: children }));
});
Button.displayName = "Button";
export { Button, buttonVariants };
