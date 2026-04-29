import * as React from "react";
import { Tooltip as BaseTooltip } from "@base-ui/react";
declare const TooltipProvider: React.FC<import("@base-ui/react").TooltipProviderProps>;
declare const Tooltip: <Payload>(props: BaseTooltip.Root.Props<Payload>) => import("react/jsx-runtime").JSX.Element;
declare const TooltipTrigger: BaseTooltip.Trigger;
declare const TooltipContent: React.ForwardRefExoticComponent<Omit<Omit<import("@base-ui/react").TooltipPopupProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
