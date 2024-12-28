"use client";

import Filter from "./Filter";
import React, { useEffect, useState } from "react";
import searchGames, { BoardGame } from "@/apis/SearchGame";
import RawList from "./RawList";

const GameList: React.FC<{ className?: string }> = ({ className }) => {
    const [games, setGames] = useState<BoardGame[] | null>(null);

    useEffect(() => {
        searchGames().then(setGames);
    }, []);

    return (
        <div
            className={`relative bg-neutral rounded-xl shadow-lg grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-2 p-2 overflow-y-auto overflow-x-hidden ${className}`}
        >
            <Filter />

            <RawList games={games} />
        </div>
    );
};

export default GameList;
