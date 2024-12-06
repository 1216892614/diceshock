"use client";

import GameList from "@/components/GameList";
import dynamic from "next/dynamic";

const ZdogShapes = dynamic(() => import("./ZdogShapes"), {
    loading: () => (
        <div className="skeleton w-[80vw] h-[80vw] md:w-[80vh] md:h-[80vh] absolute right-1/2 lg:right-10 top-1/2 translate-x-1/2 lg:-translate-x-0 -translate-y-1/2" />
    ),
});

const BoardGame = () => (
    <>
        <h2 id="桌游" style={{ fontSize: 0 }}>
            桌游
        </h2>

        <div className="relative w-full h-[calc(100vh-4rem)] flex flex-col">
            <ZdogShapes className="w-[80vw] h-[80vw] md:w-[80vh] md:h-[80vh] absolute right-1/2 lg:right-10 top-1/2 translate-x-1/2 lg:-translate-x-0 -translate-y-1/2" />

            <div className="absolute left-4 top-[30vh] [&]:text-5xl md:[&]:text-7xl">
                <p>
                    <span className="text-primary">懂桌游</span>的桌游店
                </p>
                <p>
                    有意思的
                    <span className="text-primary">好桌游</span>
                </p>
            </div>

            <div className="absolute left-7 top-[70vh] flex flex-col">
                <span className="size-7 rounded-full bg-primary" />

                <p className="bg-neutral w-40 mt-2 p-2 rounded-lg">
                    拥有<span className="text-primary">上百款</span>
                    桌游精挑细选, 热门单品老板也馋. 无论是一场
                    <span className="text-primary">冒险</span>, 一局
                    <span className="text-primary">精算</span>, 或是一场
                    <span className="text-primary">派对狂欢</span>,
                    你想玩的这里都有.
                </p>
            </div>

            <div className="absolute left-[20vw] top-[50vh] flex flex-row-reverse items-end">
                <span className="size-7 rounded-full bg-primary" />

                <p className="bg-neutral w-40 mr-2 p-2 rounded-lg">
                    专职店员贴心服务. 无论是
                    <span className="text-primary">推荐桌游</span>,{" "}
                    <span className="text-primary">讲解规则</span>,
                    组织游戏进行; 还是扮演游戏
                    <span className="text-primary">主持人</span>.
                    什么桌游都能开, 什么桌游都好玩.
                </p>
            </div>

            <div className="absolute left-4 top-[5vh] flex flex-col-reverse items-end">
                <span className="size-7 rounded-full bg-primary" />

                <p className="bg-neutral w-40 mb-2 p-2 rounded-lg">
                    被多所大学包围, 耕耘桌游行业多年. 玩桌游的人开的桌游店,
                    <span className="text-primary"> 组局不等人!</span>
                </p>
            </div>
        </div>

        <GameList className="w-auto h-[calc(100vh-5rem)] m-2 mt-[30vh]" />
    </>
);

export default BoardGame;
