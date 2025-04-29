"use client";

import React, {useEffect, useRef, useState} from "react";
import {IconX} from "@tabler/icons-react";
import {AnimatePresence, motion} from "motion/react";
import {cn} from "@/lib/utils";
import {useOutsideClick} from "@/hooks/use-outside-click";

export interface AppleCardProps {
    id: string;
    src: string;
    title: string;
    category: string;
    content: React.ReactNode;
    onClose?: () => void;
    className?: string;
}

export const AppleCard = ({
                              src,
                              title,
                              category,
                              content,
                              onClose,
                              className,
                          }: AppleCardProps) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                handleClose();
            }
        }

        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open]);

    useOutsideClick(containerRef, () => handleClose());

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        onClose?.();
    };

    return (
        <>
            <AnimatePresence>
                {open ? (
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 20}}
                        transition={{duration: 0.2}}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                    >
                        <div
                            ref={containerRef}
                            className="relative h-[70vh] sm:h-[75vh] md:h-[80vh] w-[95vw] max-w-4xl overflow-y-auto rounded-3xl bg-white p-4 sm:p-6 shadow-2xl sm:w-[90vw] md:w-[80vw] lg:w-[70vw]"
                        >
                            <button
                                onClick={handleClose}
                                className="absolute right-3 top-3 sm:right-6 sm:top-6 z-10 rounded-full bg-gray-100 p-2 sm:p-3 hover:bg-gray-200 shadow-sm"
                                aria-label="Close"
                            >
                                <IconX className="h-4 w-4 sm:h-5 sm:w-5"/>
                            </button>
                            <div className="space-y-6">
                                <div className="aspect-video w-full overflow-hidden rounded-2xl">
                                    <img
                                        src={src}
                                        alt={title}
                                        loading="lazy"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-sm font-medium uppercase text-gray-500">
                                            {category}
                                        </h3>
                                        <h2 className="text-2xl font-bold">{title}</h2>
                                    </div>
                                    <div className="prose prose-sm max-w-none">{content}</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>

            <motion.div
                whileHover={{scale: 1.02}}
                className={cn(
                    "group relative aspect-[3/4] sm:aspect-[4/5] w-36 cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-100 sm:w-48 md:w-64 lg:w-80",
                    className
                )}
                onClick={handleOpen}
            >
                <img
                    src={src}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-sm font-medium uppercase opacity-80">
                            {category}
                        </h3>
                        <h2 className="text-lg font-bold">{title}</h2>
                    </div>
                </div>
            </motion.div>
        </>
    );
};
