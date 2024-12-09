"use client";

import { useEffect } from "react";

const StarPlease = () => {
    useEffect(() => {
        setTimeout(() => {
            console.log(
                "这么想要知道这个网站的秘密, 不如直接看源码, 然后给我一个 star...",
                "https://github.com/1216892614/diceshock",
                "小さな星を摘んだなら, あなたは小さな幸せを手に入れる.",
                "大きな星を摘んだなら, あなたは大きな富を手に入れる.",
                "その両方を摘んだなら, あなたは永遠の願いを手に入れる!"
            );
        }, 1000);
    }, []);

    return <></>;
};

export default StarPlease;
