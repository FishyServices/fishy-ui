import { Toaster as Sonner } from "sonner";
import * as React from "react";
export { toast } from "sonner";
type ToasterProps = React.ComponentProps<typeof Sonner>;
declare const Toaster: ({ ...props }: ToasterProps) => import("react/jsx-runtime").JSX.Element;
export { Toaster };
