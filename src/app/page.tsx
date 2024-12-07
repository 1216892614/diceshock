import BladeRunner from "@/components/HomePage/BladeRunner";
import BoardGame from "@/components/HomePage/BoardGame";
import HomeHero from "@/components/HomePage/HomeHero";
import OuterThanBoard from "@/components/HomePage/OuterThanBoard";

export default function Home() {
    return (
        <main>
            <HomeHero />

            <BladeRunner />

            <BoardGame />

            <OuterThanBoard />
        </main>
    );
}
