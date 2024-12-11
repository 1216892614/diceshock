"use client";

import Filter from "./Filter";

const GameList: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div
            className={`bg-neutral rounded-xl shadow-lg flex flex-col overflow-hidden ${className}`}
        >
            <Filter />
        </div>
    );
};

export default GameList;
