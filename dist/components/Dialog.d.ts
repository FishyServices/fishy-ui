import * as React from "react";
import { Dialog as BaseDialog } from "@base-ui/react";
declare const Dialog: typeof BaseDialog.Root;
declare const DialogTrigger: BaseDialog.Trigger;
declare const DialogPortal: React.ForwardRefExoticComponent<Omit<import("@base-ui/react").AlertDialogPortalProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DialogClose: React.ForwardRefExoticComponent<Omit<import("@base-ui/react").AlertDialogCloseProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const DialogOverlay: React.ForwardRefExoticComponent<Omit<Omit<import("@base-ui/react").AlertDialogBackdropProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DialogContent: React.ForwardRefExoticComponent<Omit<Omit<import("@base-ui/react").AlertDialogPopupProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DialogHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DialogTitle: React.ForwardRefExoticComponent<Omit<Omit<import("@base-ui/react").AlertDialogTitleProps, "ref"> & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React.ForwardRefExoticComponent<Omit<Omit<import("@base-ui/react").AlertDialogDescriptionProps, "ref"> & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
export { Dialog, DialogPortal, DialogOverlay, DialogTrigger, DialogClose, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, };
