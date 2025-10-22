import React from "react";
import { Hamburguer } from "../../assets/icons/Hamburguer"
import { Menu } from "../Menu/Menu";
import { Close } from "../../assets/icons/Close";


type OverlayProps = {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
};

export const Overlay: React.FC<OverlayProps> = ({ isOpen, onClose, children }) => {
    React.useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 md:hidden " role="dialog" aria-modal="true">
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            />
            <div className="absolute left-0 top-0 bottom-0 w-2/4 max-w-xs bg-primary p-5 overflow-auto transform transition-transform duration-200 ">
                <Close className="mb-5 cursor-pointer" onClick={onClose} />

                {children}
            </div>
        </div>
    );
};



export const Content = () => {
    const [isHamburguerOpen, setIsHamburguerOpen] = React.useState(false);

    return (
        <div className="md:w-4/5 w-full flex flex-col items-center p-5">
            <div className="w-full h-full flex flex-col bg-secondary rounded-3xl pl-2 pt-2">
                <Hamburguer className="cursor-pointer md:hidden" onClik={() => setIsHamburguerOpen(!isHamburguerOpen)} />
                <Overlay isOpen={isHamburguerOpen} onClose={() => setIsHamburguerOpen(false)}>
                    <Menu isMobile={isHamburguerOpen} />
                </Overlay>

            </div>
        </div>
    )
}