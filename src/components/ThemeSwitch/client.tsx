"use client";

import React, { useCallback, useEffect, useRef } from "react";
import cookie from "js-cookie";

const ThemeSwitch: React.FC<React.PropsWithChildren> = ({ children }) => {
    const change = useCallback((isLightTheme: boolean) => {
        document.documentElement.classList.toggle("dark", !isLightTheme);
        cookie.set("prefer-color-scheme", JSON.stringify(isLightTheme), {
            expires: 365,
        });
    }, []);

    const ref = useRef<HTMLLabelElement>(null);

    useEffect(() => {
        const input = ref.current?.firstChild as HTMLInputElement;

        if (!input) return;

        change(input.checked);

        const onChange = (evt: Event) =>
            change((evt.target as HTMLInputElement).checked);

        input.addEventListener("change", onChange);

        return () => {
            input.removeEventListener("change", onChange);
        };
    }, [change]);

    return (
        <label ref={ref} className="swap swap-rotate btn btn-circle btn-ghost">
            {children}
        </label>
    );
};

export default ThemeSwitch;
