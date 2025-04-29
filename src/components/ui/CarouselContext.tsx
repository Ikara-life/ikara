"use client";
import React from "react";

export const CarouselContext = React.createContext<{
    onCardClose: (index: number) => void;
    currentIndex: number;
}>({
    onCardClose: () => {
    }, currentIndex: 0
});
