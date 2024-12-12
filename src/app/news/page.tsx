"use client";

import React from "react";
import BladeRunner from "@/components/HomePage/BladeRunner";
import Credits from "@/components/Credits";

const Inventory = () => {
    return (
        <>
            <BladeRunner
                texts={[
                    ["暂时这里没什么新消息欸..."],
                    ["无所谓了, 反正没开业, 没人会进来."],
                    ["那你在读什么?"],
                    ["居然还要向下看, ", "真的没什么可看的了."],
                    ["既然你还要看,"],
                    ["就再看看我们的演职人员表吧..."],
                ]}
            />

            <Credits />
        </>
    );
};

export default Inventory;
