"use client";

import Filter, { filterCfgA } from "./Filter";
import React, { useEffect, useState } from "react";
import searchGames, { BoardGame } from "@/actions/SearchGame";
import RawList from "./RawList";
import { useAtomValue } from "jotai";

const GameList: React.FC<{ className?: string }> = ({ className }) => {
    const filter = useAtomValue(filterCfgA);

    const [games, setGames] = useState<BoardGame[] | null>(null);

    useEffect(() => {
        const ctrler = new AbortController();

        setTimeout(() => {
            if (ctrler.signal.aborted) return;
            searchGames(filter, true).then((gs) => {
                if (!Array.isArray(gs)) return;

                setGames(gs);
            });
        }, 500);

        return () => {
            ctrler.abort();
        };
    }, [filter]);

    return (
        <div
            className={`relative bg-neutral rounded-xl shadow-lg grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-2 p-2 ${className}`}
        >
            <Filter />

            <RawList games={games} />
        </div>
    );
};

export default GameList;
