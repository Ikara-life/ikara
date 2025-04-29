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
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 10}}
                        transition={{duration: 0.15, ease: "easeOut"}}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                    >
                        <div
                            ref={containerRef}
                            className="relative h-[80vh] sm:h-[75vh] md:h-[80vh] w-full max-w-4xl overflow-y-auto rounded-2xl sm:rounded-3xl bg-white p-3 sm:p-6 shadow-2xl sm:w-[90vw] md:w-[80vw] lg:w-[70vw]"
                        >
                            <button
                                onClick={handleClose}
                                className="absolute right-3 top-3 sm:right-6 sm:top-6 z-10 rounded-full bg-gray-100 p-2.5 sm:p-3 hover:bg-gray-200 active:bg-gray-300 shadow-sm touch-manipulation"
                                aria-label="Close"
                            >
                                <IconX className="h-5 w-5 sm:h-5 sm:w-5"/>
                            </button>
                            <div className="space-y-4 sm:space-y-6">
                                <div className="aspect-video w-full overflow-hidden rounded-xl sm:rounded-2xl">
                                    <img
                                        src={src}
                                        alt={title}
                                        loading="lazy"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="space-y-3 sm:space-y-4">
                                    <div>
                                        <h3 className="text-xs sm:text-sm font-medium uppercase text-gray-500">
                                            {category}
                                        </h3>
                                        <h2 className="text-xl sm:text-2xl font-bold mt-1">{title}</h2>
                                    </div>
                                    <div className="prose prose-sm sm:prose max-w-none">{content}</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>

            <motion.div
                whileHover={{scale: 1.02}}
                whileTap={{scale: 0.98}}
                className={cn(
                    "group relative aspect-[3/4] sm:aspect-[4/5] w-32 cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-gray-100 sm:w-36 md:w-48 lg:w-60 touch-manipulation",
                    className
                )}
            >
                <img
                    src={src}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60">
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 text-white">
                        <h3 className="text-xs font-medium uppercase opacity-90">
                            {category}
                        </h3>
                        <h2 className="text-sm sm:text-base font-bold leading-tight">{title}</h2>
                    </div>
                </div>
            </motion.div>
        </>
    );
};
