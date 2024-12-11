"use client";

import React from "react";
import { Copy } from "@phosphor-icons/react/dist/ssr";

import QQ from "@/assets/svg/tencent-qq.svg";
import Wechat from "@/assets/svg/wechat.svg";
import useMessage from "@/hooks/useMessage";

const CopyItem = (tx: string) => {
    const msg = useMessage();

    return (
        <div className="mt-2 border border-base-300 rounded-xl shadow-inner py-1 pr-1 pl-4 flex justify-between items-center">
            <span>{tx}</span>
            <button
                onClick={() => {
                    try {
                        navigator.clipboard.writeText(tx);
                        msg.success("复制成功");
                    } catch {
                        msg.err("没有剪贴板访问权限, 请查看你的浏览器设置");
                    }
                }}
                className="btn btn-sm btn-square btn-ghost"
            >
                <Copy size={32} />
            </button>
        </div>
    );
};

const Page = () => {
    return (
        <div className="w-full min-h-screen flex flex-wrap justify-center items-start mt-20">
            <div className="card bg-base-200 h-[26rem] w-[20rem] shadow-xl mb-10 mx-2">
                <figure className="h-[10rem] bg-accent text-black">
                    <QQ className="size-12" />
                </figure>

                <div className="card-body justify-start">
                    <h2 className="card-title">通过 QQ 联系我们</h2>
                    <div>
                        <br />
                        <p>
                            <b>QQ群(DiceShock桌游·日麻·主机):</b>
                        </p>

                        {CopyItem("930828672")}

                        <br />
                        <p>
                            <b>联系主理人辣条(ID: Gahon):</b>
                        </p>

                        {CopyItem("519576792")}
                    </div>
                </div>
            </div>

            <div className="card bg-base-200 h-[20rem] w-[20rem] shadow-xl mb-10 mx-2">
                <figure className="h-[10rem] bg-primary text-black">
                    <Wechat className="size-14" />
                </figure>
                <div className="card-body justify-start">
                    <h2 className="card-title">通过微信联系我们</h2>
                    <div>
                        <br />
                        <p>
                            <b>联系主理人(Hygge/辣条):</b>
                        </p>

                        {CopyItem("GahonTian")}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
