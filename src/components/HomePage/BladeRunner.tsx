"use client";

import React, { useEffect, useMemo } from "react";
import { animated, useSpringValue, useInView } from "@react-spring/web";

const texts = [
    ["多个位面的居民声称", "他们突然遭遇了来自其他世界的异能人士."],
    ["传闻这些异能人士", "通过一间名为 DiceShock© 的店铺往返多元位面."],
    ["经调查, 这间名为 DiceShock© 的店铺", "是一个连接多元位面的实体."],
    ["而遭遇者们将这些传闻中的异能人士称为"],
    ["The Shock"],
];

const BladeRunner = () => {
    const [ref, inView] = useInView();
    const scrollY = useSpringValue(0);

    const progress = useMemo(
        () =>
            scrollY.to((y) => {
                if (!ref.current) return 0;

                const { offsetTop, scrollHeight } =
                    ref.current as HTMLDivElement;

                return (y - offsetTop) / scrollHeight;
            }),
        [ref, scrollY]
    );

    useEffect(() => {
        if (!inView) return;

        const ctrler = new AbortController();
        const container = document.getElementById(
            "[[SCROLL-CONTAINER]]"
        ) as HTMLDivElement;

        if (!container) return;

        container.addEventListener(
            "scroll",
            () => scrollY.start(container.scrollTop),
            {
                signal: ctrler.signal,
            }
        );

        return () => ctrler.abort();
    }, [inView, scrollY]);

    const count = texts.flat().length;

    return (
        <div className="w-full h-[500vh] mt-2" ref={ref}>
            <div className="sticky top-0 w-full h-screen flex flex-col justify-center py-24 px-4 [&>*]:text-xl [&>*]:font-bold">
                {texts.map((p, pid) => (
                    <p key={pid} className="md:ml-[10vw] max-w-[45rem] mb-8">
                        {p.map((tx, sid) => {
                            const idx = texts.slice(0, pid).flat().length + sid;
                            return (
                                <animated.span
                                    key={sid}
                                    className={
                                        idx === count - 1
                                            ? "text-primary !text-3xl mt-4"
                                            : void 0
                                    }
                                    style={{
                                        opacity: progress.to((p) => {
                                            const start = (idx - 1) / count;
                                            const end = idx / count;

                                            if (p < start) return 0;
                                            if (p > end) return 1;

                                            return (p - start) / (end - start);
                                        }),
                                    }}
                                >
                                    {tx}
                                </animated.span>
                            );
                        })}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default BladeRunner;
