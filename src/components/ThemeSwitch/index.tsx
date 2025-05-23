import { cookies } from "next/headers";
import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";
import ClientSide from "./client";

export default async function ThemeSwitch() {
    const cookie = await cookies();

    const payload = cookie.get("prefer-color-scheme")?.value;

    const getEl = (isLightTheme: boolean) => (
        <ClientSide>
            <input
                value="light"
                type="checkbox"
                title="theme controller"
                className="theme-controller"
                defaultChecked={isLightTheme}
            />

            <Sun className="swap-off size-7 fill-current" weight="fill" />

            <Moon className="swap-on size-7 fill-current" weight="fill" />
        </ClientSide>
    );

    try {
        const fromCookie: boolean = payload
            ? Boolean(JSON.parse(payload ?? "false"))
            : false;

        return getEl(fromCookie);
    } catch {
        return getEl(false);
    }
}
