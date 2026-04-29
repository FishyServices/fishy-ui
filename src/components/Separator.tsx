import * as React from "react";
import { Separator as BaseSeparator } from "@base-ui/react";
import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseSeparator.Root>
>(({ className, ...props }, ref) => (
  <BaseSeparator.Root
    ref={ref}
    className={cn(
      "shrink-0 bg-border data-[orientation=horizontal]:h-[1px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[1px]",
      className
    )}
    {...props}
  />
));
Separator.displayName = "Separator";

export { Separator };

