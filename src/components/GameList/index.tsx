"use client";

import Image from "next/image";

import Filter from "./Filter";
import Swing from "../Swing";
import _ from "lodash/fp";
import React from "react";

const GameList: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div
            className={`relative bg-neutral rounded-xl shadow-lg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-2 p-2 overflow-y-auto overflow-x-hidden ${className}`}
        >
            <Filter />

            {_.range(0, 12).map((i) => (
                <Swing
                    key={i}
                    className={{
                        outer: "size-min place-self-center [&_.game-meta]:hover:flex [&_.cover]:hover:flex [&_.game-meta:not(.hidden)]:flex [&_.game-meta:not(.hidden)]:sm:hidden hover:z-10",
                        inner: "size-min [transform-style:preserve-3d]",
                    }}
                >
                    <div className="card relative m-2 w-[8rem] h-[7.6rem] sm:w-[15rem] sm:h-[12rem] bg-black overflow-hidden">
                        <Image
                            className="size-full object-cover"
                            width={1600}
                            height={900}
                            src="/img/xlarge_FH_5_Evergreen_Key_Art_Horizontal_9600x5400_RGB_2_adfcd010d0.webp"
                            alt="FH 5 Evergreen Key Art Horizontal"
                        />

                        <div className="cover hidden absolute top-0 size-full bg-gradient-to-b from-black/10 to-black/70" />
                    </div>

                    <div className="game-meta absolute top-3 -left-2 [transform:translateZ(1rem)]">
                        <h5 className="w-[8rem] sm:w-[12rem] text-sm sm:text-md shadow-lg text-nowrap overflow-hidden text-ellipsis bg-primary text-black font-bold px-2 py-1">
                            Title here: With lots of letter, and so much more,
                            and so much more, and so much more, and so much more
                        </h5>
                    </div>

                    <div className="game-meta absolute top-12 -left-2 [transform:translateZ(1rem)] w-[12rem] gap-1">
                        <span className="bg-accent text-black text-sm font-bold px-1 shadow-lg">
                            德式
                        </span>
                        <span className="bg-primary text-black text-sm font-bold px-1 shadow-lg">
                            引擎构筑
                        </span>
                        <span className="bg-primary text-black text-sm font-bold px-1 shadow-lg">
                            DBG
                        </span>
                    </div>

                    <div
                        className="game-meta hidden justify-center items-center absolute -bottom-2 -right-2 [transform:translateZ(1rem)] radial-progress text-primary border-0"
                        style={{ "--value": 70 } as React.CSSProperties}
                        role="progressbar"
                    >
                        <span className="text-2xl font-bold ml-3">7</span>

                        <span className="text-sm">/10</span>
                    </div>
                </Swing>
            ))}
        </div>
    );
};

export default GameList;
