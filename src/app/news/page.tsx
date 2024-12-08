import "./globals.css";

import Credits from "@/components/Credits";
import Footer from "@/components/Footer";
import BladeRunner from "@/components/HomePage/BladeRunner";
import _ from "lodash/fp";
import React from "react";

const inventory = () => {
    return (
        <>
            <main>
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

export default inventory;
