import React from "react";
import Swing from "../Swing";

import { BoardGame } from "@/actions/SearchGame";
import LoadingImg from "./LoadingImg";
import _ from "lodash";

const RawList: React.FC<{ games: BoardGame[] | null }> = ({ games }) => {
    if (!games) return;

    return _.unionBy(games, "id").map(
        ({
            id,
            sch_name,
            sch_cover_url,
            eng_cover_url,
            category,
            mode,
            gstone_rating,
        }) => (
            <Swing
                key={id}
                className={{
                    outer: "size-min place-self-center [&_.game-meta]:hover:flex [&_.cover]:hover:flex [&_.game-meta:not(.hidden)]:flex [&_.game-meta:not(.hidden)]:sm:hidden hover:z-10",
                    inner: "size-min [transform-style:preserve-3d]",
                }}
            >
                <div className="card relative m-2 w-[7.6rem] h-[8rem] sm:w-[12rem] sm:h-[15rem] bg-black overflow-hidden">
                    <LoadingImg
                        className="size-full object-cover"
                        width={1600}
                        height={900}
                        src={sch_cover_url || eng_cover_url}
                        alt="FH 5 Evergreen Key Art Horizontal"
                    />

                    <div className="cover hidden absolute top-0 size-full bg-gradient-to-b from-black/10 to-black/70" />
                </div>

                <div className="game-meta absolute top-3 -left-2 [transform:translateZ(1rem)]">
                    <h5 className="max-w-[8rem] sm:max-w-[12rem] text-sm sm:text-md shadow-lg text-nowrap overflow-hidden text-ellipsis bg-primary text-black font-bold px-2 py-1">
                        {sch_name}
                    </h5>
                </div>

                <div className="game-meta absolute top-12 -left-2 [transform:translateZ(1rem)] w-[12rem] gap-1">
                    {(Array.isArray(category) ? category : [category]).map(
                        ({ sch_domain_value, eng_domain_value }) => (
                            <span
                                key={eng_domain_value}
                                className="bg-accent text-black text-sm font-bold px-1 shadow-lg"
                            >
                                {sch_domain_value || eng_domain_value}
                            </span>
                        )
                    )}

                    {(Array.isArray(mode) ? mode : [mode])
                        .map(({ sch_domain_value, eng_domain_value }) => (
                            <span
                                key={eng_domain_value}
                                className="bg-primary text-black text-sm font-bold px-1 shadow-lg"
                            >
                                {sch_domain_value}
                            </span>
                        ))
                        .slice(0, 2)}
                </div>

                <div
                    className="game-meta hidden justify-center items-center absolute -bottom-2 -right-2 [transform:translateZ(1rem)] radial-progress text-primary border-0"
                    style={
                        { "--value": gstone_rating * 10 } as React.CSSProperties
                    }
                    role="progressbar"
                >
                    <span className="text-xl font-bold">
                        {gstone_rating.toFixed(1)}
                    </span>

                    <span className="text-xs">/10</span>
                </div>
            </Swing>
        )
    );
};

export default RawList;
