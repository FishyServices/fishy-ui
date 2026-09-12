import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "fishy" | "ghost" | "link" | "outline" | "secondary" | null | undefined;
    size?: "default" | "icon" | "icon-sm" | "lg" | "sm" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    className?: string;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLElement>>;
export { Button, buttonVariants };
