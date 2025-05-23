import { cookies } from "next/headers";
import ClientSide from "./client";

export default async function ThemeSwitch() {
    const cookie = await cookies();

    const payload = cookie.get("prefer-color-scheme")?.value;

    const fromCookie: boolean = payload ? JSON.parse(payload) : true;

    return <ClientSide fromCookie={fromCookie} />;
}
