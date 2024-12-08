import TableAgent from "@/assets/svg/agents/DiceshockItems_table-agent-icon.svg";
import TablePassCC from "@/assets/svg/agents/DiceshockItems_table-pass-cc-icon.svg";
import TablePass from "@/assets/svg/agents/DiceshockItems_table-pass-icon.svg";
import TablePassLTS from "@/assets/svg/agents/DiceshockItems_table-pass-lts-icon.svg";
import AgentsChannel from "@/assets/svg/agents_channel.svg";
import AgentLogo from "@/assets/svg/agent-logo.svg";

const Agents = () => (
    <>
        <div className="w-full py-52 flex flex-col justify-center items-center">
            <AgentLogo className="w-10 mb-4" />
            <h2 className="text-bg sm:text-xl md:text-3xl mb-5">
                现在加入成为{" "}
                <span className="text-primary font-bold">
                    DiceShock Agents©
                </span>{" "}
                会员
            </h2>
            <p className="text-sm sm:text-xl mb-20">选择你的会员计划</p>

            <div className="w-full flex flex-wrap [&>*]:mb-10 [&>*]:mx-2 justify-around items-stretch">
                <div className="card bg-base-200 w-96 shadow-xl">
                    <figure>
                        <TableAgent className="w-[20rem] py-[5.5rem]" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Table AGENT 储值卡</h2>
                        <p>充值福利, 付费折扣.</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-black text-primary">
                                联系我们
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-200 w-96 shadow-xl">
                    <figure>
                        <TablePassCC className="w-[20rem] py-[5.5rem]" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">CC桌面通行证</h2>
                        <p>超低廉价格, 办理20个工作日畅玩.</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-black text-primary">
                                联系我们
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-200 w-96 shadow-xl">
                    <figure>
                        <TablePass className="w-[20rem] py-[5.5rem]" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">桌面通行证</h2>
                        <p>办理30天畅玩无限!</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-black text-primary">
                                联系我们
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-200 w-96 shadow-xl">
                    <figure>
                        <TablePassLTS className="h-[25rem]" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">桌面通行证 LTS</h2>
                        <p>办理365天畅玩无限</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-black text-primary">
                                联系我们
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full h-[40vh] bg-neutral flex flex-col justify-center items-center">
            <AgentsChannel className="w-10 mb-4 text-neutral-content" />

            <p className="text-neutral-content text-xl px-4 text-center">
                加入任意会员计划即可享用{" "}
                <span className="text-primary">Agents Channel</span>{" "}
                会员专属频道
            </p>
        </div>
    </>
);

export default Agents;
