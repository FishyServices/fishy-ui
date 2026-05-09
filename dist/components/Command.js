import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "../lib/utils";
import { Dialog, DialogContent } from "./Dialog";
const CommandContext = React.createContext(null);
const CommandGroupContext = React.createContext(null);
function useCommandContext() {
    const context = React.useContext(CommandContext);
    if (!context) {
        throw new Error("Command components must be used within <Command>");
    }
    return context;
}
function normalizeValue(value) {
    return value.trim().toLowerCase();
}
const Command = React.forwardRef(({ className, ...props }, ref) => {
    const [query, setQuery] = React.useState("");
    const [items, setItems] = React.useState({});
    const registerItem = React.useCallback((id, item) => {
        setItems((current) => ({ ...current, [id]: item }));
    }, []);
    const unregisterItem = React.useCallback((id) => {
        setItems((current) => {
            const next = { ...current };
            delete next[id];
            return next;
        });
    }, []);
    const visibleIds = React.useMemo(() => {
        const normalizedQuery = normalizeValue(query);
        const entries = Object.entries(items);
        if (!normalizedQuery)
            return new Set(entries.map(([id]) => id));
        return new Set(entries.filter(([, item]) => item.value.includes(normalizedQuery)).map(([id]) => id));
    }, [items, query]);
    const value = React.useMemo(() => ({
        query,
        setQuery,
        registerItem,
        unregisterItem,
        isVisible: (id) => visibleIds.has(id),
        visibleCount: visibleIds.size,
        getGroupVisibleCount: (groupId) => Object.entries(items).reduce((count, [id, item]) => {
            if (item.groupId !== groupId)
                return count;
            return visibleIds.has(id) ? count + 1 : count;
        }, 0)
    }), [items, query, registerItem, unregisterItem, visibleIds]);
    return (_jsx(CommandContext.Provider, { value: value, children: _jsx("div", { ref: ref, className: cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className), ...props }) }));
});
Command.displayName = "Command";
const CommandDialog = ({ children, ...props }) => {
    return (_jsx(Dialog, { ...props, children: _jsx(DialogContent, { className: "overflow-hidden p-0", children: _jsx(Command, { children: children }) }) }));
};
const CommandInput = React.forwardRef(({ className, onChange, ...props }, ref) => {
    const { query, setQuery } = useCommandContext();
    return (_jsxs("div", { className: "flex items-center border-b px-3", children: [_jsx(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }), _jsx("input", { ref: ref, value: query, className: cn("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className), onChange: (event) => {
                    setQuery(event.target.value);
                    onChange?.(event);
                }, ...props })] }));
});
CommandInput.displayName = "CommandInput";
const CommandList = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className), ...props })));
CommandList.displayName = "CommandList";
const CommandEmpty = React.forwardRef(({ className, ...props }, ref) => {
    const { visibleCount } = useCommandContext();
    if (visibleCount > 0)
        return null;
    return _jsx("div", { ref: ref, className: cn("py-6 text-center text-sm", className), ...props });
});
CommandEmpty.displayName = "CommandEmpty";
const CommandGroup = React.forwardRef(({ className, heading, children, ...props }, ref) => {
    const groupId = React.useId();
    const { getGroupVisibleCount } = useCommandContext();
    const visibleCount = getGroupVisibleCount(groupId);
    if (visibleCount === 0)
        return null;
    return (_jsx(CommandGroupContext.Provider, { value: groupId, children: _jsxs("div", { ref: ref, className: cn("overflow-hidden p-1 text-foreground", className), ...props, children: [heading ? (_jsx("div", { className: "px-2 py-1.5 text-xs font-medium text-muted-foreground", children: heading })) : null, children] }) }));
});
CommandGroup.displayName = "CommandGroup";
const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("-mx-1 h-px bg-border", className), ...props })));
CommandSeparator.displayName = "CommandSeparator";
const CommandItem = React.forwardRef(({ className, value = "", onClick, onSelect, children, ...props }, ref) => {
    const id = React.useId();
    const groupId = React.useContext(CommandGroupContext);
    const { registerItem, unregisterItem, isVisible } = useCommandContext();
    const normalizedValue = normalizeValue(value);
    React.useEffect(() => {
        registerItem(id, { groupId, value: normalizedValue });
        return () => unregisterItem(id);
    }, [groupId, id, normalizedValue, registerItem, unregisterItem]);
    if (!isVisible(id))
        return null;
    return (_jsx("button", { ref: ref, type: "button", className: cn("relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-left text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50", className), onClick: (event) => {
            onClick?.(event);
            if (!event.defaultPrevented) {
                onSelect?.(value);
            }
        }, ...props, children: children }));
});
CommandItem.displayName = "CommandItem";
const CommandShortcut = ({ className, ...props }) => {
    return (_jsx("span", { className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className), ...props }));
};
CommandShortcut.displayName = "CommandShortcut";
export { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator };
