import * as React from "react";
import { Select as BaseSelect } from "@base-ui/react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

const SelectContext = React.createContext<{ items?: any }>({});

function Select<Value = any, Multiple extends boolean | undefined = false>({
  items,
  ...props
}: Omit<BaseSelect.Root.Props<Value, Multiple>, "onValueChange"> & { 
  items?: any;
  onValueChange?: (value: any, details: any) => void;
}) {
  return (
    <SelectContext.Provider value={{ items }}>
      <BaseSelect.Root items={items} data-slot="select" {...props} />
    </SelectContext.Provider>
  );
}

function SelectGroup({ ...props }: BaseSelect.Group.Props) {
  return <BaseSelect.Group data-slot="select-group" {...props} />;
}

function SelectValue({ children, ...props }: BaseSelect.Value.Props) {
  const { items } = React.useContext(SelectContext);

  if (children !== undefined) {
    return (
      <BaseSelect.Value data-slot="select-value" {...props}>
        {children}
      </BaseSelect.Value>
    );
  }

  if (!Array.isArray(items) || items.length === 0) {
    return <BaseSelect.Value data-slot="select-value" {...props} />;
  }

  return (
    <BaseSelect.Value data-slot="select-value" {...props}>
      {(value: any) => {
        if (value === null || value === undefined || value === "") {
          return props.placeholder;
        }

        const item = items.find((i: any) => i.value === value);

        return item?.label ?? value;
      }}
    </BaseSelect.Value>
  );
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: BaseSelect.Trigger.Props & {
  size?: "sm" | "default";
}) {
  return (
    <BaseSelect.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-input data-placeholder:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <BaseSelect.Icon>
        <ChevronDown className="size-4 opacity-50" />
      </BaseSelect.Icon>
    </BaseSelect.Trigger>
  );
}

function SelectContent({
  className,
  children,
  ...props
}: BaseSelect.Popup.Props) {
  return (
    <BaseSelect.Portal>
      <BaseSelect.Positioner className="z-50">
        <BaseSelect.Popup
          data-slot="select-content"
          className={cn(
            "bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative max-h-96 min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            className
          )}
          {...props}
        >
          {children}
        </BaseSelect.Popup>
      </BaseSelect.Positioner>
    </BaseSelect.Portal>
  );
}

function SelectLabel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="select-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs font-semibold", className)}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: BaseSelect.Item.Props) {
  const getLabelFromChildren = (children: React.ReactNode): string | undefined => {
    if (typeof children === "string") return children;
    if (typeof children === "number") return String(children);
    if (Array.isArray(children)) {
      return children
        .map(child => getLabelFromChildren(child))
        .filter(Boolean)
        .join("");
    }
    return undefined;
  };

  const labelText = getLabelFromChildren(children);

  return (
    <BaseSelect.Item
      data-slot="select-item"
      label={labelText}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <BaseSelect.ItemIndicator>
          <Check className="size-4" />
        </BaseSelect.ItemIndicator>
      </span>
      <BaseSelect.ItemText>{children}</BaseSelect.ItemText>
    </BaseSelect.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue
};
