import * as React from "react";
import { Popover as BasePopover } from "@base-ui/react";
type DropdownMenuProps = Omit<React.ComponentPropsWithoutRef<typeof BasePopover.Root>, "open"> & {
    open?: boolean;
};
declare function DropdownMenu({ open: controlledOpen, defaultOpen, onOpenChange, children, ...props }: DropdownMenuProps): React.JSX.Element;
declare const DropdownMenuTrigger: BasePopover.Trigger;
declare const DropdownMenuGroup: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element;
declare const DropdownMenuPortal: React.ForwardRefExoticComponent<Omit<import("@base-ui/react").PopoverPortalProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSub: typeof DropdownMenu;
declare const DropdownMenuContent: React.ForwardRefExoticComponent<Omit<Omit<import("@base-ui/react").PopoverPopupProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubTrigger: React.ForwardRefExoticComponent<Omit<import("@base-ui/react/internals/types").NativeButtonProps & Omit<import("@base-ui/react/internals/types").WithBaseUIEvent<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>, "className" | "color" | "defaultChecked" | "defaultValue" | "style"> & {
    className?: string | ((state: import("@base-ui/react").PopoverTriggerState) => string | undefined) | undefined;
    render?: import("@base-ui/react").ComponentRenderFn<import("@base-ui/react").HTMLProps, import("@base-ui/react").PopoverTriggerState> | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | undefined;
    style?: React.CSSProperties | ((state: import("@base-ui/react").PopoverTriggerState) => React.CSSProperties | undefined) | undefined;
} & {
    nativeButton?: boolean | undefined;
    handle?: BasePopover.Handle<unknown> | undefined;
    payload?: unknown;
    id?: string | undefined;
    openOnHover?: boolean | undefined;
    delay?: number | undefined;
    closeDelay?: number | undefined;
} & React.RefAttributes<HTMLElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuSubContent: React.ForwardRefExoticComponent<Omit<Omit<import("@base-ui/react").PopoverPopupProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
type DropdownMenuItemProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    inset?: boolean;
    onSelect?: () => void;
};
declare const DropdownMenuItem: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & {
    inset?: boolean;
    onSelect?: () => void;
} & React.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuCheckboxItem: React.ForwardRefExoticComponent<Omit<DropdownMenuItemProps, "onSelect"> & {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    onSelect?: () => void;
} & React.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuRadioItem: React.ForwardRefExoticComponent<Omit<DropdownMenuItemProps, "onSelect"> & {
    checked?: boolean;
    onSelect?: () => void;
} & React.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuLabel: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger };
