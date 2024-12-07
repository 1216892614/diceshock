"use client";

import dynamic from "next/dynamic";

import useSticky from "@/hooks/useSticky";
import { animated } from "@react-spring/web";

const ZdogShapes = dynamic(() => import("./ZdogShapes"), {
    loading: () => (
        <div className="skeleton w-[80vw] h-[80vw] rounded-xl md:w-[80vh] md:h-[80vh] absolute right-1/2 lg:right-10 top-1/2 translate-x-1/2 lg:-translate-x-0 -translate-y-1/2" />
    ),
});

const texts = [
    "好桌子, 大桌子, 再大桌游也好开!",
    "椅子牢固又舒服, 老板家同款",
    "带桌游来玩? 免费! 带团的 GM/DM/KP 统统都免费!",
    "来我家跑团啥都不用带. 骰子, tokens, 地图板, 白板, 还有棋子都给你包圆了",
    "想玩什么和我们说, 能解决的都解决",
];

const colors = ["#36ffa1", "#4fdfb8", "#6abecd", "#849fe4", "#9d7efa"];

const OuterThanBoard = () => {
    const { ref, progress } = useSticky();

    return (
        <div className="w-full h-[250vh] mb-96" ref={ref}>
            <div className="w-full h-screen sticky top-0">
                <div className="absolute left-4 top-[12rem] [&]:text-5xl md:[&]:text-7xl [&]:text-base-content">
                    <p>
                        用心之处,
                        <br className="md:hidden" />{" "}
                        <span className="text-primary">不止桌游</span>
                    </p>
                </div>

                <ZdogShapes className="cursor-move w-[80vw] h-[80vw] md:w-[80vh] md:h-[80vh] pointer-events-none md:pointer-events-auto opacity-70 lg:opacity-100 absolute right-1/2 lg:right-10 top-1/2 translate-x-1/2 lg:-translate-x-0 -translate-y-1/2" />

                <div className="absolute left-10 top-[20rem] flex flex-col chat chat-start">
                    {texts.map((tx, idx) => (
                        <animated.p
                            key={idx}
                            style={{
                                backgroundColor: colors[idx % colors.length],
                                transform: progress.to((p) => {
                                    const start = (idx - 2) / texts.length;
                                    const end = (idx - 1) / texts.length;

                                    if (p < start) return `scale(0)`;
                                    if (p > end) return `scale(1)`;

                                    return `scale(${
                                        0.8 +
                                        0.2 * ((p - start) / (end - start))
                                    })`;
                                }),
                                opacity: progress.to((p) => {
                                    const start = (idx - 2) / texts.length;
                                    const end = (idx - 1) / texts.length;

                                    if (p < start) return 0;
                                    if (p > end) return 1;

                                    return (p - start) / (end - start);
                                }),
                            }}
                            className="chat-bubble text-xl mb-5 rounded-lg font-bold text-base-100 px-4 py-5 origin-left"
                        >
                            {tx}
                        </animated.p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OuterThanBoard;
