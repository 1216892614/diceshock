"use client";

import { useEffect, useState } from "react";

import searchGames, { BoardGame } from "@/apis/SearchGame";
import Filter from "@/components/GameList/Filter";
import RawList from "@/components/GameList/RawList";
import { useInView } from "@react-spring/web";

const Page = () => {
    const [ref, isInView] = useInView();

    const [games, setGames] = useState<BoardGame[] | null>(null);
    const [isLoading, loading] = useState<boolean>(false);
    const [pageCount, setPageCount] = useState<number>(1);

    useEffect(() => {
        if (!isInView || isLoading) return;

        loading(true);

        searchGames(pageCount).then((gs) => {
            if (!Array.isArray(gs)) return;

            setGames((games) =>
                Array.isArray(games) ? [...games, ...gs] : gs
            );

            setPageCount((c) => c + 1);

            loading(false);
        });
    }, [isInView, isLoading, pageCount]);

    return (
        <>
            <Filter className="top-[5rem] px-10" />

            <div className="relative bg-neutral mt-10 py-8 rounded-xl shadow-lg grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-2 p-2 overflow-y-auto overflow-x-hidden w-auto min-h-[calc(100vh-5rem)] mx-2">
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
