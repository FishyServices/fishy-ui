import * as React from "react";
import { Slider as BaseSlider } from "@base-ui/react";
import { cn } from "../lib/utils";

const Slider = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseSlider.Root>
>(({ className, ...props }, ref) => (
  <BaseSlider.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <BaseSlider.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
      <BaseSlider.Indicator className="absolute h-full bg-primary" />
    </BaseSlider.Track>
    <BaseSlider.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
  </BaseSlider.Root>
));
Slider.displayName = "Slider";

export { Slider };

