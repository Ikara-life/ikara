"use client";
import React, {useEffect, useMemo, useState} from "react";
import {IconArrowNarrowLeft, IconArrowNarrowRight} from "@tabler/icons-react";
import {cn} from "@/lib/utils";
import {motion} from "motion/react";
import {AppleCard, type AppleCardProps} from "./apple-card";
import {CarouselContext} from "./carousel-context";

interface CarouselProps {
    items: AppleCardProps[];
    initialScroll?: number;
}

export const Carousel = ({items, initialScroll = 0}: CarouselProps) => {
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = initialScroll;
            checkScrollability();
        }
    }, [initialScroll]);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const {scrollLeft, scrollWidth, clientWidth} = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            // Calculate scroll amount based on viewport width
            const scrollAmount = window.innerWidth < 640 ? -200 : window.innerWidth < 1024 ? -250 : -300;
            carouselRef.current.scrollBy({left: scrollAmount, behavior: "smooth"});
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            // Calculate scroll amount based on viewport width
            const scrollAmount = window.innerWidth < 640 ? 200 : window.innerWidth < 1024 ? 250 : 300;
            carouselRef.current.scrollBy({left: scrollAmount, behavior: "smooth"});
        }
    };

    const handleCardClose = (index: number) => {
        if (carouselRef.current) {
            // Calculate card width based on viewport width
            // These values should match the w-* classes in the apple-card component
            let cardWidth = 160; // w-40 default
            let gap = 32; // gap-md (2rem)

            if (window.innerWidth >= 1280) {
                cardWidth = 320; // lg:w-80
            } else if (window.innerWidth >= 768) {
                cardWidth = 256; // md:w-64
            } else if (window.innerWidth >= 640) {
                cardWidth = 192; // sm:w-48
            }

            // Calculate scroll position based on card width, gap, and index
            const scrollPosition = (cardWidth + gap) * index;
            carouselRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
            setCurrentIndex(index);
        }
    };

    const contextValue = useMemo(() => ({
        onCardClose: handleCardClose,
        currentIndex
    }), [currentIndex]);

    return (
        <CarouselContext.Provider value={contextValue}>
            <div className="relative w-full">
                <div
                    className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-3 [scrollbar-width:none] md:py-3"
                    ref={carouselRef}
                    onScroll={checkScrollability}
                >
                    <div
                        className={cn(
                            "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
                        )}
                    ></div>

                    <div
                        className={cn(
                            "flex flex-row justify-start gap-md pl-4",
                            "mx-auto w-full" // Changed from max-w-7xl to w-full for better responsiveness
                        )}
                    >
                        {items.map((item, index) => (
                            <motion.div
                                initial={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                key={item.id}
                                className="rounded-3xl last:pr-[10%] sm:last:pr-[15%] md:last:pr-[25%] lg:last:pr-[33%]"
                            >
                                <AppleCard {...item} onClose={() => handleCardClose(index)}/>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center sm:justify-end gap-2 mt-4 sm:mt-2 sm:mr-10">
                    <button
                        className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50 shadow-sm"
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                        aria-label="Scroll left"
                    >
                        <IconArrowNarrowLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500"/>
                    </button>
                    <button
                        className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50 shadow-sm"
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                        aria-label="Scroll right"
                    >
                        <IconArrowNarrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500"/>
                    </button>
                </div>
            </div>
        </CarouselContext.Provider>
    );
};
