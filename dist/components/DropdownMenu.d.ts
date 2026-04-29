import * as React from "react";
import { Menu as BaseMenu } from "@base-ui/react";
declare const DropdownMenu: <Payload>(props: BaseMenu.Root.Props<Payload>) => import("react/jsx-runtime").JSX.Element;
declare const DropdownMenuTrigger: BaseMenu.Trigger;
declare const DropdownMenuGroup: React.ForwardRefExoticComponent<Omit<import("@base-ui/react").ContextMenuGroupProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuPortal: React.ForwardRefExoticComponent<Omit<import("@base-ui/react").ContextMenuPortalProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSub: <Payload>(props: BaseMenu.Root.Props<Payload>) => import("react/jsx-runtime").JSX.Element;
declare const DropdownMenuSubTrigger: React.ForwardRefExoticComponent<Omit<import("@base-ui/react").MenuTriggerProps<unknown> & React.RefAttributes<HTMLElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuSubContent: React.ForwardRefExoticComponent<Omit<Omit<import("@base-ui/react").ContextMenuPopupProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuContent: React.ForwardRefExoticComponent<Omit<Omit<import("@base-ui/react").ContextMenuPopupProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuItem: React.ForwardRefExoticComponent<Omit<Omit<import("@base-ui/react").ContextMenuItemProps, "ref"> & React.RefAttributes<HTMLElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuCheckboxItem: React.ForwardRefExoticComponent<Omit<Omit<import("@base-ui/react").ContextMenuCheckboxItemProps, "ref"> & React.RefAttributes<HTMLElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuRadioItem: React.ForwardRefExoticComponent<Omit<Omit<import("@base-ui/react").ContextMenuRadioItemProps, "ref"> & React.RefAttributes<HTMLElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, };
