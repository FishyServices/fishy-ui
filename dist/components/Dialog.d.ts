import * as React from "react";
import { Dialog as BaseDialog } from "@base-ui/react";
declare const Dialog: typeof BaseDialog.Root;
declare const DialogTrigger: BaseDialog.Trigger;
declare const DialogPortal: React.ForwardRefExoticComponent<Omit<import("@base-ui/react").DialogPortalProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DialogClose: React.ForwardRefExoticComponent<Omit<import("@base-ui/react").DialogCloseProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const DialogOverlay: React.ForwardRefExoticComponent<Omit<Omit<import("@base-ui/react").DialogBackdropProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DialogContent: React.ForwardRefExoticComponent<Omit<Omit<import("@base-ui/react").DialogPopupProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare function DialogHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
declare namespace DialogHeader {
    var displayName: string;
}
declare function DialogFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
declare namespace DialogFooter {
    var displayName: string;
}
declare const DialogTitle: React.ForwardRefExoticComponent<Omit<Omit<import("@base-ui/react").DialogTitleProps, "ref"> & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React.ForwardRefExoticComponent<Omit<Omit<import("@base-ui/react").DialogDescriptionProps, "ref"> & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
export { Dialog, DialogPortal, DialogOverlay, DialogTrigger, DialogClose, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription };
