"use client";

import React from "react";
import { animated } from "@react-spring/web";
import useSticky from "@/hooks/useSticky";
import { reRange } from "@/utils/math";

const texts = [
    ["多个位面的居民声称", "他们突然遭遇了来自其他世界的异能人士."],
    ["传闻这些异能人士", "通过一间名为 DiceShock© 的店铺往返多元位面."],
    ["经调查, 这间名为 DiceShock© 的店铺", "是一个连接多元位面的实体."],
    ["而遭遇者们将这些传闻中的异能人士称为"],
    ["The Shock"],
];

const BladeRunner = () => {
    const { ref, progress } = useSticky();

    const count = texts.flat().length;

    return (
        <div className="w-full h-[300vh] mt-2" ref={ref}>
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
                                        opacity: progress.to((p) =>
                                            reRange(p, idx, count)
                                        ),
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
