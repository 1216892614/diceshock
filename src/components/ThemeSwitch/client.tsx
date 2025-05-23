"use client";

import React, { useEffect } from "react";
import { atom, useAtom } from "jotai";
import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";
import { useHydrateAtoms } from "jotai/utils";
import cookie from "js-cookie";

export const isDarkA = atom(true);

const ThemeSwitch: React.FC<{ fromCookie: boolean }> = ({ fromCookie }) => {
    useHydrateAtoms([[isDarkA, fromCookie]]);

    const [isDark, setIsDark] = useAtom(isDarkA);

    useEffect(() => {
        cookie.set("prefer-color-scheme", JSON.stringify(isDark));
    }, [isDark]);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", !isDark);
    }, [isDark]);

    return (
        <label className="swap swap-rotate btn btn-circle btn-ghost">
            <input
                type="checkbox"
                className="theme-controller"
                value="light"
                checked={isDark}
                onChange={(evt) => setIsDark(evt.target.checked)}
            />

            <Sun className="swap-off size-7 fill-current" weight="fill" />

            <Moon className="swap-on size-7 fill-current" weight="fill" />
        </label>
    );
};

export default ThemeSwitch;
