import GameStart from "@/components/GameStart";
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

            <div className="w-full h-[20vh]" />

            <BladeRunner
                texts={[
                    ["雨夜..."],
                    [
                        "天空中的光芒稍许",
                        "带着轰隆的雷声炸裂在 DiceShock© 窗外.",
                    ],
                    ["一些冒险者苦于糟糕的天气只能在店内进行日式麻将."],
                    [
                        "一个银白色头发高中生模样的少年走进店里,",
                        ' "介意多一个人吗?".',
                    ],
                    ["这是传奇牌手赤木有记载的第一个半庄."],
                    ["DiceShock© 公式战"],
                ]}
            />

            <div className="h-[200vh]" />
        </main>
    );
}
