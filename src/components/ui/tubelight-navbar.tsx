"use client";

import React, {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import {cn} from "@/lib/utils";

interface NavItem {
    icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
    name: string;
    url: string;
}

interface NavBarProps {
    className?: string;
    items: NavItem[];
}

export function NavBar({items, className}: NavBarProps) {
    const [activeTab, setActiveTab] = useState(items[0].name);
    const [isMobile, setIsMobile] = useState(false);
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionName = Object.keys(sectionRefs.current).find(
                            (key) => sectionRefs.current[key] === entry.target
                        );
                        if (sectionName) {
                            setActiveTab(sectionName);
                        }
                    }
                });
            },
            {
                threshold: isMobile ? 0.3 : 0.6,
                rootMargin: isMobile ? "-50px 0px" : "0px",
            }
        );

        items.forEach((item) => {
            const sectionId = item.url.replace("#", "");
            const sectionElement = document.getElementById(sectionId);
            if (sectionElement) {
                sectionRefs.current[item.name] = sectionElement;
                observer.observe(sectionElement);
            }
        });

        return () => observer.disconnect();
    }, [items, isMobile]);

    const isInHeroSection = className?.includes("text-white");

    return (
        <div
            className={cn(
                "fixed left-1/2 -translate-x-1/2 z-[100] mb-6 sm:pt-6 w-[90%] max-w-screen-md",
                className
            )}
        >
            <div
                className="flex items-center justify-between w-full bg-background/5 border border-transparent backdrop-blur-lg py-1 px-1.5 xs:py-1.5 xs:px-2 sm:py-2 sm:px-3 rounded-full shadow-lg">
                {items.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = activeTab === item.name;

                    return (
                        <a
                            key={item.name}
                            href={item.url}
                            onClick={() => setActiveTab(item.name)}
                            className={cn(
                                "relative cursor-pointer text-xs font-semibold rounded-full transition-colors flex flex-col items-center flex-1 justify-center",
                                "hover:text-primary px-1 py-1 xs:px-1.5",
                                "md:px-2 md:py-1.5 md:flex-row md:gap-1.5",
                                isActive ? "bg-muted text-primary" : "",
                                isInHeroSection
                                    ? "text-white hover:text-white"
                                    : "hover:text-[#1A1F2C]"
                            )}
                        >
              <span className="md:hidden">
                <IconComponent size={16} strokeWidth={2.5}/>
              </span>
                            <span className="md:hidden text-[8px] xs:text-[9px] mt-0.5 whitespace-nowrap">
                {item.name}
              </span>
                            <span className="hidden md:inline whitespace-nowrap text-sm">
                {item.name}
              </span>

                            {isActive && (
                                <motion.div
                                    layoutId="lamp"
                                    className={cn(
                                        "absolute inset-0 w-full rounded-full -z-10",
                                        isInHeroSection ? "bg-white/10" : "bg-black/5"
                                    )}
                                    initial={false}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                >
                                    <div
                                        className={cn(
                                            "absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-t-full",
                                            isInHeroSection ? "bg-white/60" : "bg-black"
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                "absolute w-12 h-6 rounded-full blur-md -top-2 -left-2",
                                                isInHeroSection ? "bg-white/20" : "bg-black/20"
                                            )}
                                        />
                                        <div
                                            className={cn(
                                                "absolute w-8 h-6 rounded-full blur-md -top-1",
                                                isInHeroSection ? "bg-white/20" : "bg-black/20"
                                            )}
                                        />
                                        <div
                                            className={cn(
                                                "absolute w-4 h-4 rounded-full blur-sm top-0 left-2",
                                                isInHeroSection ? "bg-white/20" : "bg-black/20"
                                            )}
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
