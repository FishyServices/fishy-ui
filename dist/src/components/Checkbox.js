import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { Checkbox as BaseCheckbox } from "@base-ui/react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
const Checkbox = React.forwardRef(({ className, ...props }, ref) => (_jsx(BaseCheckbox.Root, { ref: ref, className: cn("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className), ...props, children: _jsx(BaseCheckbox.Indicator, { className: cn("flex items-center justify-center text-current"), children: _jsx(Check, { className: "h-4 w-4" }) }) })));
Checkbox.displayName = "Checkbox";
export { Checkbox };
