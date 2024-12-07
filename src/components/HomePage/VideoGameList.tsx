import Image from "next/image";

import Forza from "@/assets/svg/video-games/forza.svg";
import Cod from "@/assets/svg/video-games/cod.svg";

const VideoGameList = () => (
    <>
        <div className="w-full h-[60vw] max-h-[35rem] mt-[40rem] lg:mt-0 relative [perspective:1000px]">
            <Image
                className="absolute top-0 left-[calc(50%-5rem)] md:left-[calc(50%-10rem)] -translate-x-1/2 w-2/3 min-w-[20rem] max-w-[40rem] rounded-lg shadow-2xl"
                width={1600}
                height={900}
                src="/img/xlarge_FH_5_Evergreen_Key_Art_Horizontal_9600x5400_RGB_2_adfcd010d0.webp"
                alt="FH 5 Evergreen Key Art Horizontal"
            />

            <Image
                className="absolute top-[10rem] lg:top-[15rem] left-[calc(50%+5rem)] md:left-[calc(50%+10rem)] -translate-x-1/2 w-2/3 min-w-[20rem] max-w-[40rem] rounded-lg shadow-2xl"
                width={1600}
                height={900}
                src="/img/xlarge_Forza_Motorsport_Key_Art_16x9_RGB_F02_3840x2160_8bf1f444b2.webp"
                alt="Forza Motorsport"
            />

            <Forza className="w-1/3 max-w-64 absolute top-[10rem] lg:top-[15rem] left-1/2 -translate-x-1/2 text-primary" />
        </div>

        <div className="w-full h-[60vw] max-h-[35rem] -mt-[2rem] relative [perspective:1000px]">
            <Image
                className="absolute top-0 left-[calc(50%-5rem)] md:left-[calc(50%-10rem)] -translate-x-1/2 w-2/3 min-w-[20rem] max-w-[40rem] rounded-lg shadow-2xl"
                width={1600}
                height={900}
                src="/img/Store_BO6PDP_Hero.webp"
                alt="Warzone"
            />

            <Image
                className="absolute top-[10rem] lg:top-[15rem] left-[calc(50%+5rem)] md:left-[calc(50%+10rem)] -translate-x-1/2 w-2/3 min-w-[20rem] max-w-[40rem] rounded-lg shadow-2xl"
                width={1600}
                height={900}
                src="/img/COD-Store_PDP-WZ_Hero_01.webp"
                alt="BLACK OPS 6"
            />

            <Cod className="w-1/2 max-w-[30rem] absolute top-[10rem] lg:top-[15rem] left-1/2 -translate-x-1/2 text-primary" />
        </div>

        <div className="w-full h-[80vw] max-h-[35rem] -mt-[2rem] relative [perspective:1000px]">
            <div className="w-full h-[20rem] md:h-[40rem] absolute top-[10rem] md:top-[10rem] bg-primary" />

            <Image
                className="absolute left-1/2 top-[15rem] md:top-[10rem] -translate-x-1/2 w-full scale-125"
                width={2418}
                height={1320}
                src="/img/bg-astarion.png"
                alt="Warzone"
            />

            <Image
                className="absolute top-0 left-[calc(50%-5rem)] md:left-[calc(50%-10rem)] -translate-x-1/2 w-2/3 min-w-[20rem] max-w-[40rem]"
                width={1710}
                height={1380}
                src="/img/hero-dark.png"
                alt="Warzone"
            />

            <Image
                className="absolute top-[10rem] lg:top-[15rem] right-0 w-2/3 min-w-[20rem] max-w-[40rem]"
                width={1710}
                height={1380}
                src="/img/hero-astarion.png"
                alt="BLACK OPS 6"
            />

            <Image
                className="absolute top-[10rem] lg:top-[15rem] left-0 w-2/3 min-w-[20rem] max-w-[40rem]"
                width={1600}
                height={900}
                src="/img/hero-gale.png"
                alt="BLACK OPS 6"
            />

            <Image
                className="absolute top-[20rem] left-[calc(50%+5rem)] md:left-[calc(60%+4rem)] -translate-x-1/2 w-2/3 min-w-[20rem] max-w-[40rem]"
                width={1710}
                height={1380}
                src="/img/hero-karlach.png"
                alt="Warzone"
            />

            <Image
                className="absolute top-[25rem] md:top-[30rem] left-[calc(50%-5rem)] md:left-1/2 -translate-x-1/2 w-2/3 min-w-[20rem] max-w-[40rem]"
                width={1710}
                height={1380}
                src="/img/hero-laezel.png"
                alt="Warzone"
            />

            <Image
                className="absolute top-[25rem] left-[calc(20%)] md:left-[calc(50%-20rem)] -translate-x-1/2 w-2/3 min-w-[20rem] max-w-[40rem]"
                width={1710}
                height={1380}
                src="/img/hero-shadowheart.png"
                alt="Warzone"
            />

            <Image
                className="absolute top-[15rem] md:top-[20rem] left-1/2 -translate-x-1/2 w-2/3 min-w-[20rem] max-w-[40rem]"
                width={1710}
                height={1380}
                src="/img/logo-bg3.png"
                alt="Warzone"
            />
        </div>
    </>
);

export default VideoGameList;
