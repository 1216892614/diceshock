import GameStart from "@/components/HomePage/GameStart";
import BladeRunner from "@/components/HomePage/BladeRunner";
import BoardGame from "@/components/HomePage/BoardGame";
import HomeHero from "@/components/HomePage/HomeHero";
import OuterThanBoard from "@/components/HomePage/OuterThanBoard";
import VideoGame from "@/components/HomePage/VideoGame";
import VideoGameList from "@/components/HomePage/VideoGameList";

export default function Home() {
    return (
        <main>
            <HomeHero />

            <BladeRunner
                texts={[
                    [
                        "多个位面的居民声称",
                        "他们突然遭遇了来自其他世界的异能人士.",
                    ],
                    [
                        "传闻这些异能人士",
                        "通过一间名为 DiceShock© 的店铺往返多元位面.",
                    ],
                    [
                        "经调查, 这间名为 DiceShock© 的店铺",
                        "是一个连接多元位面的实体.",
                    ],
                    ["而遭遇者们将这些传闻中的异能人士称为"],
                    ["The Shock"],
                ]}
            />

            <BoardGame />

            <OuterThanBoard />

            <GameStart />

            <VideoGame />

            <VideoGameList />

            <div className="h-[200vh]" />
        </main>
    );
}
