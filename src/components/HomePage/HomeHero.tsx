import _ from "lodash";
import { Copyright } from "@phosphor-icons/react/dist/ssr";

import Rainbow from "@/components/Rainbow";

import LongTextLogo from "@/assets/svg/long-text-logo.svg";
import BlackSimplifyLogo from "@/assets/svg/black-simplify-logo.svg";
import Lighting from "@/assets/svg/lighting.svg";
import Gradient from "../Gradient";
import Link from "next/link";

const HomeHero = () => (
    <>
        <div className="relative w-full h-screen max-h-screen overflow-hidden -mt-[4rem] hidden lg:block">
            <div className="relative w-full h-2/3 overflow-hidden">
                <div className="absolute left-0 top-12 flex w-[240rem] justify-around overflow-hidden">
                    {_.range(0, 30).map((r) => (
                        <div
                            key={r}
                            className="flex h-[240rem] flex-col justify-around"
                        >
                            {_.range(0, 30).map((c) => (
                                <Lighting key={`${r}-${c}`} className="w-4" />
                            ))}
                        </div>
                    ))}
                </div>

                <div className="absolute top-48 left-5 bg-base-100">
                    <h1 className="font-bold flex text-8xl justify-center ">
                        DiceShock <Copyright />
                    </h1>
                    <span className="text-xl pl-2">
                        桌游, 日麻, 主机, 我们都是认真的
                    </span>
                </div>

                <div className="absolute bottom-0 w-[37rem] left-5 bg-base-100 flex justify-between pl-6 [&>*]:text-2xl hover:[&>*]:text-base-100 hover:[&>*]:bg-base-content">
                    <Link href="#BoardGame">桌游</Link>
                    <Link href="/">日麻</Link>
                    <Link href="#VideoGame">主机</Link>
                </div>

                <BlackSimplifyLogo className="absolute -bottom-5 left-[50rem] w-[20rem] bg-base-100" />
            </div>

            <div className="w-full h-1/3 bg-base-content">
                <Rainbow className="w-full h-36" direction="col" gradient={8} />
            </div>

            <div className="absolute  -bottom-[2vh]">
                <span className="font-bold text-base-100 text-[12vh]">F02</span>

                <span className="font-light text-base-100 text-[5vh] ml-2">
                    204
                </span>
            </div>

            <LongTextLogo className="absolute text-base-100 h-[10vh] bottom-0 right-0" />
        </div>

        <div className="relative w-full h-[calc(100vh-4rem)] max-h-[calc(100vh-4rem)] overflow-hidden flex lg:hidden">
            <div className="relative w-1/2 h-full bg-base-content flex justify-between overflow-hidden rounded-br-2xl">
                <div className="relative size-full flex flex-col items-start justify-between">
                    <div className="-mt-[2vw]">
                        <div className="font-bold text-base-100 text-[8vw] -mb-[2vw]">
                            F02
                        </div>

                        <div className="font-light text-base-100 text-[4vw] ml-[0.5vw]">
                            204
                        </div>
                    </div>

                    <LongTextLogo className="absolute h-[10vw] -left-[30.5vw] bottom-[28vw] rotate-90 text-base-100" />
                </div>

                <Rainbow
                    className="absolute w-1/2 h-full -right-1 rotate-180"
                    gradient={12}
                />
            </div>

            <div className="relative w-1/2 h-full">
                <div className="absolute top-0 left-[2vw] bg-base-100">
                    <h1 className="font-bold flex text-[7vw] justify-center items-center">
                        DiceShock <Copyright />
                    </h1>
                    <p className="text-[4vw] pl-[calc(1vw-0.75rem)]">桌游, 日麻, 主机</p>
                    <p className="text-[4vw] pl-[calc(1vw-0.75rem)]">我们都是认真的</p>
                </div>

                <div className="absolute left-[4vw] top-[25vw] flex w-[40vw] justify-around overflow-hidden">
                    {_.range(0, 6).map((r) => (
                        <div
                            key={r}
                            className="flex h-[40vw] flex-col justify-around"
                        >
                            {_.range(0, 6).map((c) => (
                                <Lighting key={`${r}-${c}`} className="w-4" />
                            ))}
                        </div>
                    ))}
                </div>

                <div className="absolute bottom-2 w-[40vw] left-0 bg-base-100 flex justify-between pl-6 [&>*]:text-[3vw] hover:[&>*]:text-base-100 hover:[&>*]:bg-base-content">
                    <Link href="#BoardGame">桌游</Link>
                    <Link href="/">日麻</Link>
                    <Link href="#VideoGame">主机</Link>
                </div>
            </div>
        </div>

        <Gradient
            direction="col"
            className={{
                main: "w-full h-[10rem] bg-base-content hidden lg:flex",
                a: "bg-base-100",
                b: "bg-base-content",
            }}
        />
    </>
);

export default HomeHero;
