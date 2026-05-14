import * as React from "react";
import { Popover as BasePopover } from "@base-ui/react";
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "../lib/utils";

type MenuContextValue = {
  closeMenu: () => void;
};

const DropdownMenuContext = React.createContext<MenuContextValue | null>(null);

function useDropdownMenuContext() {
  return React.useContext(DropdownMenuContext);
}

type DropdownMenuProps = Omit<React.ComponentPropsWithoutRef<typeof BasePopover.Root>, "open"> & {
  open?: boolean;
};

function DropdownMenu({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  children,
  ...props
}: DropdownMenuProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = React.useCallback(
    (
      nextOpen: boolean,
      eventDetails?: Parameters<NonNullable<DropdownMenuProps["onOpenChange"]>>[1]
    ) => {
      if (!isControlled) {
        setUncontrolledOpen(nextOpen);
      }
      onOpenChange?.(nextOpen, eventDetails as never);
    },
    [isControlled, onOpenChange]
  );

  const contextValue = React.useMemo(
    () => ({
      closeMenu: () => setOpen(false)
    }),
    [setOpen]
  );

  return (
    <DropdownMenuContext.Provider value={contextValue}>
      <BasePopover.Root open={open} onOpenChange={setOpen} {...props}>
        {children}
      </BasePopover.Root>
    </DropdownMenuContext.Provider>
  );
}

const DropdownMenuTrigger = BasePopover.Trigger;
const DropdownMenuGroup = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-0", className)} role="group" {...props} />
);
const DropdownMenuPortal = BasePopover.Portal;
const DropdownMenuSub = DropdownMenu;

const dropdownContentClass =
  "z-[140] min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-none transform-gpu will-change-[transform,opacity] data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2";

const DropdownMenuContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BasePopover.Popup>
>(({ className, ...props }, ref) => (
  <BasePopover.Portal>
    <BasePopover.Positioner>
      <BasePopover.Popup ref={ref} className={cn(dropdownContentClass, className)} {...props} />
    </BasePopover.Positioner>
  </BasePopover.Portal>
));
DropdownMenuContent.displayName = "DropdownMenuContent";

const DropdownMenuSubTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof BasePopover.Trigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <BasePopover.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </BasePopover.Trigger>
));
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";

const DropdownMenuSubContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BasePopover.Popup>
>(({ className, ...props }, ref) => (
  <BasePopover.Portal>
    <BasePopover.Positioner>
      <BasePopover.Popup
        ref={ref}
        className={cn(dropdownContentClass, "shadow-lg", className)}
        {...props}
      />
    </BasePopover.Positioner>
  </BasePopover.Portal>
));
DropdownMenuSubContent.displayName = "DropdownMenuSubContent";

type DropdownMenuItemProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  inset?: boolean;
  onSelect?: () => void;
};

const DropdownMenuItem = React.forwardRef<HTMLButtonElement, DropdownMenuItemProps>(
  ({ className, inset, onClick, onSelect, disabled, type = "button", ...props }, ref) => {
    const menu = useDropdownMenuContext();

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          "relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50",
          inset && "pl-8",
          className
        )}
        onClick={(event) => {
          onClick?.(event);
          if (event.defaultPrevented || disabled) return;
          onSelect?.();
          menu?.closeMenu();
        }}
        {...props}
      />
    );
  }
);
DropdownMenuItem.displayName = "DropdownMenuItem";

type DropdownMenuCheckboxItemProps = Omit<DropdownMenuItemProps, "onSelect"> & {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  onSelect?: () => void;
};

const DropdownMenuCheckboxItem = React.forwardRef<HTMLButtonElement, DropdownMenuCheckboxItemProps>(
  ({ className, children, checked = false, onCheckedChange, onSelect, ...props }, ref) => (
    <DropdownMenuItem
      ref={ref}
      className={cn("pl-8", className)}
      onSelect={() => {
        onCheckedChange?.(!checked);
        onSelect?.();
      }}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        {checked ? <Check className="h-4 w-4" /> : null}
      </span>
      {children}
    </DropdownMenuItem>
  )
);
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";

type DropdownMenuRadioItemProps = Omit<DropdownMenuItemProps, "onSelect"> & {
  checked?: boolean;
  onSelect?: () => void;
};

const DropdownMenuRadioItem = React.forwardRef<HTMLButtonElement, DropdownMenuRadioItemProps>(
  ({ className, children, checked = false, ...props }, ref) => (
    <DropdownMenuItem ref={ref} className={cn("pl-8", className)} {...props}>
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        {checked ? <Circle className="h-2 w-2 fill-current" /> : null}
      </span>
      {children}
    </DropdownMenuItem>
  )
);
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";

const DropdownMenuLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = "DropdownMenuLabel";

const DropdownMenuSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger
};
