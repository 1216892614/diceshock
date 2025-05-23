import React from "react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

import ThemeSwitch from "./ThemeSwitch";
import LongTextLogo from "@/assets/svg/black-simplify-with-text-logo.svg";

type PageType = {
    title: React.ReactNode;
    href?: string;
    children?: PageType[];
};

const PAGES: PageType[] = [
    {
        title: "库存",
        href: `/inventory`,
    },
    {
        title: "DiceShock Agents©",
        href: `/diceshock-agents`,
    },
    {
        title: "联系我们",
        href: `/contact-us`,
    },
    {
        title: "关于我们",
        children: [
            { title: "加入我们", href: "/" },
            { title: "服务条款", href: "/" },
        ],
    },
];

const getSideMenu = (pages: PageType[]) =>
    pages
        .map(({ title, href, children }, i) => {
            if (children)
                return (
                    <li key={i}>
                        <span>{title}</span>
                        <ul className="p-2">{getSideMenu(children)}</ul>
                    </li>
                );

            if (href)
                return (
                    <li key={i}>
                        <Link href={href}>{title}</Link>
                    </li>
                );

            return void 0;
        })
        .filter(Boolean);

const getMidMenu = (pages: PageType[]) =>
    pages
        .map(({ title, href, children }, i) => {
            if (children)
                return (
                    <li key={i}>
                        <details>
                            <summary className="text-nowrap">{title}</summary>
                            <ul className="p-2 !mt-5">
                                {getMidMenu(children)}
                            </ul>
                        </details>
                    </li>
                );

            if (href)
                return (
                    <li key={i}>
                        <Link href={href} className="text-nowrap mr-2">
                            {title}
                        </Link>
                    </li>
                );

            return void 0;
        })
        .filter(Boolean);

const Header = () => (
    <header className="sticky w-full top-0 left-0 z-50">
        <nav className="navbar bg-base-100/70 backdrop-blur-xl">
            <div className="navbar-start gap-1">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <CaretDown className="h-5 w-5" />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {getSideMenu(PAGES)}
                    </ul>
                </div>

                <Link href="/" className="btn btn-ghost px-0">
                    <LongTextLogo className="h-full" />
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {getMidMenu(PAGES)}
                </ul>
            </div>

            <div className="navbar-end">
                <ThemeSwitch />
            </div>
        </nav>
    </header>
);

export default Header;
