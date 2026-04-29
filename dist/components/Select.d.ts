import * as React from "react";
import { Select as BaseSelect } from "@base-ui/react";
declare function Select<Value = any, Multiple extends boolean | undefined = false>({ items, ...props }: Omit<BaseSelect.Root.Props<Value, Multiple>, "onValueChange"> & {
    items?: any;
    onValueChange?: (value: any, details: any) => void;
}): import("react/jsx-runtime").JSX.Element;
declare function SelectGroup({ ...props }: BaseSelect.Group.Props): import("react/jsx-runtime").JSX.Element;
declare function SelectValue({ children, ...props }: BaseSelect.Value.Props): import("react/jsx-runtime").JSX.Element;
declare function SelectTrigger({ className, size, children, ...props }: BaseSelect.Trigger.Props & {
    size?: "sm" | "default";
}): import("react/jsx-runtime").JSX.Element;
declare function SelectContent({ className, children, ...props }: BaseSelect.Popup.Props): import("react/jsx-runtime").JSX.Element;
declare function SelectLabel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
declare function SelectItem({ className, children, ...props }: BaseSelect.Item.Props): import("react/jsx-runtime").JSX.Element;
declare function SelectSeparator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
export { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue };
