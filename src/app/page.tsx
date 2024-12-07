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

            <BladeRunner />

            <BoardGame />

            <OuterThanBoard />

            <GameStart />

            <VideoGame />

            <VideoGameList />

            <div className="h-[200vh]" />
        </main>
    );
}
