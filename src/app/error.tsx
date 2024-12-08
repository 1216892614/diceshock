"use client";
import Link from "next/link";

const Error = () => (
    <div className="w-screen h-screen relative">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
            <h1 className="font-bold text-[20vw] md:text-[15vw] lg:text-[10rem] text-primary text-nowrap">
                Uh-oh!
            </h1>

            <h2 className="font-bold text-xl text-center md:text-2xl lg:text-4xl">
                服务器发生了什么错误!
            </h2>

            <div className="mt-11 w-full flex justify-center items-center flex-col md:flex-row">
                <Link
                    href="/"
                    className="btn btn-primary mr-0 mb-5 md:mr-5 md:mb-0"
                >
                    返回主页
                </Link>

                <Link href="/" className="btn btn-ghost">
                    联系我们
                </Link>
            </div>
        </div>
    </div>
);

export default Error;
