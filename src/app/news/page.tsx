"use client";

import "./style.css";

import React, { useEffect } from "react";
import Credits from "@/components/Credits";
import Footer from "@/components/Footer";
import BladeRunner from "@/components/HomePage/BladeRunner";
import _ from "lodash/fp";

const Inventory = () => {
    useEffect(() => {
        setTimeout(() => {
            console.log(
                "这么想要知道这个页面的秘密, 不如直接看源码, 然后给我一个 star...",
                "https://github.com/1216892614/diceshock",
                "小さな星を摘んだなら, あなたは小さな幸せを手に入れる.",
                "大きな星を摘んだなら, あなたは大きな富を手に入れる.",
                "その両方を摘んだなら, あなたは永遠の願いを手に入れる!"
            );
        }, 1000);
    }, []);

    return (
        <>
            <main className="dont_disable_this_QAQ w-full h-[calc(100vh-5rem)] max-h-[calc(100vh-5rem)] overflow-x-hidden overflow-y-auto">
                <BladeRunner
                    texts={[
                        ["暂时这里没什么新消息欸..."],
                        ["无所谓了, 反正没开业, 没人会进来."],
                        ["那你在读什么?"],
                        ["居然还要向下看, ", "真的没什么可看的了."],
                        ["既然你还要看,"],
                        ["就看看我们的演职人员表吧..."],
                    ]}
                />

                <Credits />

                <BladeRunner
                    texts={[
                        ["惊了, 你居然能翻到这里?"],
                        ["不是, 无聊也不能这么无聊吧..."],
                        ["我就是个写网页的, ", "往下翻又不会真给你发点什么..."],
                        ["这次真的是结束了."],
                        ["..."],
                    ]}
                />

                <Credits />

                <div className="w-full h-[1000vh] md:mt-[-70vh]">
                    <div className="sticky top-0 h-screen flex flex-col">
                        <div className="w-full h-full" />
                        <Footer />
                    </div>
                </div>

                <BladeRunner
                    texts={[
                        ["真不愧是你.", "最后还是被你翻到了, "],
                        ["直接联系我 (Nerd), 或者找店员老板什么的联系我"],
                        [
                            "再下面都是重复的, 是用来骗那些直接用 ctrl + end, 的人, ",
                            "笑(",
                        ],
                        ["神秘代码: "],
                        ["THX1138"],
                    ]}
                />

                {/* 考虑到这是一份开源的代码, 不会有人真的在这里找到了答案吧? */}
                {/* 出于程序员的友谊我在这里放上份神秘代码: !EPBae)S7eg@vAH */}

                {_.range(1, 20).map((idx) => (
                    <React.Fragment key={idx}>
                        <Credits />

                        <div className="w-full h-[1000vh] md:mt-[-70vh]">
                            <div className="sticky top-0 h-screen flex flex-col">
                                <div className="w-full h-full" />
                                <Footer />
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </main>
        </>
    );
};

export default Inventory;
