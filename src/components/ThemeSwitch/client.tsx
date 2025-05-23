"use client";

import React, { useCallback, useEffect, useRef } from "react";
import cookie from "js-cookie";

const ThemeSwitch: React.FC<React.PropsWithChildren> = ({ children }) => {
    const change = useCallback((evt: Event) => {
        const isLightTheme = (evt.target as HTMLInputElement).checked;
        document.documentElement.classList.toggle("dark", !isLightTheme);
        cookie.set("prefer-color-scheme", JSON.stringify(isLightTheme), {
            expires: 365,
        });
    }, []);

    const ref = useRef<HTMLLabelElement>(null);

    useEffect(() => {
        const input = ref.current?.firstChild as HTMLInputElement;

        if (!input) return;

        input.addEventListener("change", change);

        return () => {
            input.removeEventListener("change", change);
        };
    }, [change]);

    return (
        <label ref={ref} className="swap swap-rotate btn btn-circle btn-ghost">
            {children}
        </label>
    );
};

export default ThemeSwitch;
