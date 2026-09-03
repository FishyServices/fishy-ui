import * as React from "react";
import { Dialog as BaseDialog } from "@base-ui/react";
import { type VariantProps } from "class-variance-authority";
declare const Sheet: typeof BaseDialog.Root;
declare const SheetTrigger: BaseDialog.Trigger;
declare const SheetClose: React.ForwardRefExoticComponent<Omit<import("@base-ui/react").DialogCloseProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const SheetPortal: React.ForwardRefExoticComponent<Omit<import("@base-ui/react").DialogPortalProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SheetOverlay: React.ForwardRefExoticComponent<Omit<Omit<import("@base-ui/react").DialogBackdropProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const sheetVariants: (props?: ({
    side?: "bottom" | "left" | "right" | "top" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof BaseDialog.Popup>, VariantProps<typeof sheetVariants> {
}
declare const SheetContent: React.ForwardRefExoticComponent<SheetContentProps & React.RefAttributes<HTMLDivElement>>;
declare function SheetHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
declare namespace SheetHeader {
    var displayName: string;
}
declare function SheetFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
declare namespace SheetFooter {
    var displayName: string;
}
declare const SheetTitle: React.ForwardRefExoticComponent<Omit<Omit<import("@base-ui/react").DialogTitleProps, "ref"> & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const SheetDescription: React.ForwardRefExoticComponent<Omit<Omit<import("@base-ui/react").DialogDescriptionProps, "ref"> & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
export { Sheet, SheetPortal, SheetOverlay, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription };
