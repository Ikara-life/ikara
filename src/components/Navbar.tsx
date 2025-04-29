"use client";

import {NavBar} from "./ui/TubeLightNavbar";
import {yinYang} from "@lucide/lab";
import {Bolt, createLucideIcon, SmilePlus, Speech, User} from "lucide-react";
import {useEffect, useMemo, useState} from "react";

export default function Navbar() {
    const [isInHeroSection, setIsInHeroSection] = useState(true);

    const YinYangIcon = useMemo(() => createLucideIcon("YinYang", yinYang), []);

    const navItems = useMemo(
        () => [
            {name: "Home", url: "#hero", icon: Bolt},
            {name: "About Ikara", url: "#ikara", icon: YinYangIcon},
            {name: "The Experience", url: "#experience", icon: SmilePlus},
            {name: "About Us", url: "#about", icon: User},
            {name: "Apply", url: "#apply", icon: Speech},
        ],
        [YinYangIcon]
    );

    useEffect(() => {
        const heroSection = document.getElementById("hero");

        const checkIfInHeroSection = () => {
            if (heroSection) {
                const rect = heroSection.getBoundingClientRect();
                const isIntersecting = rect.top <= 100 && rect.bottom >= 0;
                setIsInHeroSection(isIntersecting);
            }
        };

        checkIfInHeroSection();
        window.addEventListener("scroll", checkIfInHeroSection);
        return () => window.removeEventListener("scroll", checkIfInHeroSection);
    }, []);

    return (
        <NavBar
            items={navItems}
            className={`bg-transparent ${
                isInHeroSection ? "text-white" : "text-[#1A1F2C]"
            }`}
        />
    );
}
