import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Popover as BasePopover } from "@base-ui/react";
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "../lib/utils";
const DropdownMenuContext = React.createContext(null);
function useDropdownMenuContext() {
    return React.useContext(DropdownMenuContext);
}
function DropdownMenu({ open: controlledOpen, defaultOpen = false, onOpenChange, children, ...props }) {
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : uncontrolledOpen;
    const setOpen = React.useCallback((nextOpen, eventDetails) => {
        if (!isControlled) {
            setUncontrolledOpen(nextOpen);
        }
        onOpenChange?.(nextOpen, eventDetails);
    }, [isControlled, onOpenChange]);
    const contextValue = React.useMemo(() => ({
        closeMenu: () => setOpen(false)
    }), [setOpen]);
    return (_jsx(DropdownMenuContext.Provider, { value: contextValue, children: _jsx(BasePopover.Root, { open: open, onOpenChange: setOpen, ...props, children: children }) }));
}
const DropdownMenuTrigger = BasePopover.Trigger;
const DropdownMenuGroup = ({ className, ...props }) => (_jsx("div", { className: cn("p-0", className), role: "group", ...props }));
const DropdownMenuPortal = BasePopover.Portal;
const DropdownMenuSub = DropdownMenu;
const dropdownContentClass = "z-menu min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-none transform-gpu will-change-[transform,opacity] data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2";
const DropdownMenuContent = React.forwardRef(({ className, ...props }, ref) => (_jsx(BasePopover.Portal, { children: _jsx(BasePopover.Positioner, { children: _jsx(BasePopover.Popup, { ref: ref, className: cn(dropdownContentClass, className), ...props }) }) })));
DropdownMenuContent.displayName = "DropdownMenuContent";
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => (_jsxs(BasePopover.Trigger, { ref: ref, className: cn("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground", inset && "pl-8", className), ...props, children: [children, _jsx(ChevronRight, { className: "ml-auto h-4 w-4" })] })));
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => (_jsx(BasePopover.Portal, { children: _jsx(BasePopover.Positioner, { children: _jsx(BasePopover.Popup, { ref: ref, className: cn(dropdownContentClass, "shadow-lg", className), ...props }) }) })));
DropdownMenuSubContent.displayName = "DropdownMenuSubContent";
const DropdownMenuItem = React.forwardRef(({ className, inset, onClick, onSelect, disabled, type = "button", ...props }, ref) => {
    const menu = useDropdownMenuContext();
    return (_jsx("button", { ref: ref, type: type, disabled: disabled, className: cn("relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50", inset && "pl-8", className), onClick: (event) => {
            onClick?.(event);
            if (event.defaultPrevented || disabled)
                return;
            onSelect?.();
            menu?.closeMenu();
        }, ...props }));
});
DropdownMenuItem.displayName = "DropdownMenuItem";
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked = false, onCheckedChange, onSelect, ...props }, ref) => (_jsxs(DropdownMenuItem, { ref: ref, className: cn("pl-8", className), onSelect: () => {
        onCheckedChange?.(!checked);
        onSelect?.();
    }, ...props, children: [_jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: checked ? _jsx(Check, { className: "h-4 w-4" }) : null }), children] })));
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";
const DropdownMenuRadioItem = React.forwardRef(({ className, children, checked = false, ...props }, ref) => (_jsxs(DropdownMenuItem, { ref: ref, className: cn("pl-8", className), ...props, children: [_jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: checked ? _jsx(Circle, { className: "h-2 w-2 fill-current" }) : null }), children] })));
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className), ...props })));
DropdownMenuLabel.displayName = "DropdownMenuLabel";
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props })));
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";
export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger };
