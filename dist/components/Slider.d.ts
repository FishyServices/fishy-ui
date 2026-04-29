import * as React from "react";
import { Slider as BaseSlider } from "@base-ui/react";
declare const Slider: React.ForwardRefExoticComponent<Omit<BaseSlider.Root.Props<number | readonly number[]> & {
    ref?: React.Ref<HTMLDivElement> | undefined;
}, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { Slider };
