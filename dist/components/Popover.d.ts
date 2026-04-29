import * as React from "react";
import { Popover as BasePopover } from "@base-ui/react";
declare const Popover: typeof BasePopover.Root;
declare const PopoverTrigger: BasePopover.Trigger;
declare const PopoverPortal: React.ForwardRefExoticComponent<Omit<import("@base-ui/react").PopoverPortalProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const PopoverContent: React.ForwardRefExoticComponent<Omit<Omit<import("@base-ui/react").PopoverPopupProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { Popover, PopoverTrigger, PopoverContent, PopoverPortal };
