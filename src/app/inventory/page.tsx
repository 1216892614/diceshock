"use client";

import dynamic from "next/dynamic";

const GameList = dynamic(() => import("@/components/GameList/Page"), {
    ssr: false,
    loading: () => (
        <div className="skeleton w-auto h-[calc(100vh-5rem)] mx-2" />
    ),
});

const inventory = () => {
    return <GameList />;
};

export default inventory;
