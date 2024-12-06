"use client";

import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";
import { atomWithStorage } from "jotai/utils";

export const isDarkA = atomWithStorage("perfers-color-scheme", false);

const ThemeSwitch: React.FC = () => {
    const [isDark, setIsDark] = useAtom(isDarkA);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", !isDark);
    }, [isDark]);

    return (
        <label className="swap swap-rotate">
            <input
                type="checkbox"
                className="theme-controller"
                value="light"
                checked={isDark}
                onChange={(evt) => setIsDark(evt.target.checked)}
            />

            <Sun className="swap-off h-7 w-7 fill-current" weight="fill" />

            <Moon className="swap-on h-7 w-7 fill-current" weight="fill" />
        </label>
    );
};

export default ThemeSwitch;
