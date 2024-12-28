"use client";

import { useCallback, useEffect, useState } from "react";

import searchGames, { BoardGame } from "@/actions/SearchGame";
import Filter, { filterCfgA } from "@/components/GameList/Filter";
import RawList from "@/components/GameList/RawList";
import { useAtomValue } from "jotai";
import { debounce } from "lodash";

const Page = () => {
    const filter = useAtomValue(filterCfgA);

    const [games, setGames] = useState<BoardGame[] | null>(null);

    useEffect(() => {
        const debouncedUpdate = debounce(
            () =>
                searchGames(filter).then((gs) => {
                    if (!Array.isArray(gs)) return;

                    setGames(gs);
                }),
            1000
        );

        return () => {
            debouncedUpdate.cancel();
        };
    }, [filter]);

    return (
        <>
            <Filter className="top-[5rem] px-10" />

            <div className="relative bg-neutral mt-10 py-8 rounded-xl shadow-lg grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-2 p-2 overflow-y-auto overflow-x-hidden w-auto mx-2">
                <RawList games={games} />
            </div>
        </>
    );
};

export default Page;
