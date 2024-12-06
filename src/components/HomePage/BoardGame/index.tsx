"use client";

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

        <div className="relative w-full h-screen">
            <ZdogShapes className="w-[80vw] h-[80vw] md:w-[80vh] md:h-[80vh] absolute right-1/2 lg:right-10 top-1/2 translate-x-1/2 lg:-translate-x-0 -translate-y-1/2" />

            <span className="absolute bottom-0 left-[3vw] text-[4rem] sm:text-[8rem] md:text-[10rem] dark:text-primary">
                桌游
            </span>
        </div>
    </>
);

export default BoardGame;
