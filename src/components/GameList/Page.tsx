"use client";

import { useCallback, useEffect, useState } from "react";

import searchGames, { BoardGame } from "@/apis/SearchGame";
import Filter, { filterCfgA } from "@/components/GameList/Filter";
import RawList from "@/components/GameList/RawList";
import { useInView } from "@react-spring/web";
import { useAtomValue } from "jotai";

const Page = () => {
    const [ref, isInView] = useInView();

    const filter = useAtomValue(filterCfgA);

    const [games, setGames] = useState<BoardGame[] | null>(null);
    const [pageCount, setPageCount] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const loading = useCallback(
        (...args: Parameters<typeof searchGames>) =>
            searchGames(...args).then((gs) => {
                if (!Array.isArray(gs)) return;

                setGames((games) =>
                    Array.isArray(games) ? [...games, ...gs] : gs
                );

                setPageCount((c) => c + 1);

                setIsLoading(false);
            }),
        []
    );

    useEffect(() => {
        loading();
    }, [loading]);

    useEffect(() => {
        if (!filter) return;

        setGames(null);
        setPageCount(1);
    }, [filter]);

    useEffect(() => {
        if (!isInView) return;

        setIsLoading(true);

        const ctrler = new AbortController();

        loading(pageCount, filter, ctrler.signal);

        return () => {
            ctrler.abort();
            setIsLoading(false);
        };
    }, [filter, isInView, loading, pageCount]);

    return (
        <>
            <Filter className="top-[5rem] px-10" />

            <div className="relative bg-neutral mt-10 py-8 rounded-xl shadow-lg grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-2 p-2 overflow-y-auto overflow-x-hidden w-auto mx-2">
                <RawList games={games} />
            </div>

            <div
                ref={ref}
                className="w-full min-h-2 flex justify-center items-center py-10"
            >
                {isLoading && (
                    <button className="btn">
                        <span className="loading loading-spinner"></span>
                        loading
                    </button>
                )}
            </div>
        </>
    );
};

export default Page;
