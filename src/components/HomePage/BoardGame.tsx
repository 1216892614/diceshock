"use client";

import { Balloon, Headset, SquaresFour } from "@phosphor-icons/react/dist/ssr";
import { useInView, useSpringValue, animated } from "@react-spring/web";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const GameList = dynamic(() => import("@/components/GameList"), {
    loading: () => (
        <div className="skeleton w-auto h-[calc(100vh-5rem)] m-2 mt-[30vh]" />
    ),
});

const BoardGame = () => {
    const [ref, inView] = useInView();

    const opacity1 = useSpringValue(0.1, {
        config: { damping: 5, friction: 20 },
    });
    const opacity2 = useSpringValue(0.1, {
        config: { damping: 15, friction: 40 },
    });
    const opacity3 = useSpringValue(0.1, {
        config: { damping: 25, friction: 60 },
    });

    useEffect(() => {
        if (inView) {
            opacity1.start(1);
            opacity2.start(1);
            opacity3.start(1);
        } else {
            opacity1.start(0);
            opacity2.start(0);
            opacity3.start(0);
        }
    }, [inView, opacity1, opacity2, opacity3]);

    return (
        <>
            <h2 id="桌游" style={{ fontSize: 0 }}>
                桌游
            </h2>

            <div className="relative w-full h-[calc(100vh-4rem)] flex flex-col mt-[4rem] [&:not(.text-primary)]:text-neutral-content">
                <h2 className="absolute left-4 top-[10vh] [&]:text-5xl md:[&]:text-7xl [&]:text-base-content">
                    <p>
                        <span className="text-primary">懂桌游</span>的桌游店
                    </p>
                    <p>
                        有意思的
                        <span className="text-primary">好桌游</span>
                    </p>
                </h2>

                <div className="absolute left-1/2 lg:left-[40vw] top-[15rem] lg:top-[5vh] h-[65rem] w-[70vw] flex flex-col lg:flex-row items-center justify-between -translate-x-1/2">
                    <animated.div
                        style={{
                            opacity: opacity1,
                            scale: opacity1.to((p) => 0.8 + 0.2 * p),
                        }}
                        className="flex flex-col items-center lg:items-start"
                    >
                        <span className="size-20 rounded-full bg-primary flex justify-center items-center text-base-100">
                            <SquaresFour size={40} weight="light" />
                        </span>

                        <h3 className="text-3xl my-2 text-base-content">
                            各类桌游,
                            <br /> 精挑细选
                        </h3>

                        <p className="w-56 text-base-content/70 text-xl">
                            DiceShock© 拥有
                            <span className="text-base-content">上百款</span>
                            精挑细选的桌游. 无论是一场
                            <span className="text-base-content">冒险</span>,
                            一局
                            <span className="text-base-content">精算</span>,
                            或是一场
                            <span className="text-base-content">派对狂欢</span>,
                            你想玩的这里都有.
                        </p>
                    </animated.div>

                    <animated.div
                        style={{
                            opacity: opacity2,
                            scale: opacity2.to((p) => 0.8 + 0.2 * p),
                        }}
                        className="flex flex-col items-center lg:items-start"
                    >
                        <span className="size-20 rounded-full bg-primary flex justify-center items-center text-base-100">
                            <Balloon size={40} weight="light" />
                        </span>

                        <h3 className="text-3xl my-2 text-base-content">
                            大学包围,
                            <br /> 即刻约局
                        </h3>

                        <p
                            ref={ref}
                            className="w-56 text-base-content/70 text-xl"
                        >
                            DiceShock© 被多所大学包围, 主理人耕耘桌游行业多年.
                            玩桌游的人开的桌游店,
                            <span className="text-base-content">
                                {" "}
                                组局不等人!
                            </span>
                        </p>
                    </animated.div>

                    <animated.div
                        style={{
                            opacity: opacity3,
                            scale: opacity3.to((p) => 0.8 + 0.2 * p),
                        }}
                        className="flex flex-col items-center lg:items-start"
                    >
                        <span className="size-20 rounded-full bg-primary flex justify-center items-center text-base-100">
                            <Headset size={40} weight="light" />
                        </span>

                        <h3 className="text-3xl my-2 text-base-content">
                            贴心店员,
                            <br /> 啥都能开
                        </h3>

                        <p className="w-56 text-base-content/70 text-xl">
                            专职店员贴心服务. 无论是
                            <span className="text-base-content">
                                推荐桌游
                            </span>,{" "}
                            <span className="text-base-content">讲解规则</span>,
                            组织游戏进行; 还是扮演游戏
                            <span className="text-base-content">主持人</span>.
                            什么桌游都能开, 什么桌游都好玩.
                        </p>
                    </animated.div>
                </div>
            </div>

            <div className="relative mt-[55rem] lg:mt-[20rem] w-full h-screen">
                <GameList className="w-auto h-[calc(100vh-5rem)] m-2" />
            </div>
        </>
    );
};

export default BoardGame;
