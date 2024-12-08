import Link from "next/link";

import Logo from "@/assets/svg/black-simplify-with-text-logo.svg";
import Gradient from "./Gradient";

const Footer = () => (
    <>
        <Gradient
            direction="col"
            className={{
                main: "w-full h-[5rem]",
                a: "bg-neutral",
                b: "bg-base-100",
            }}
        />
        <footer className="footer bg-neutral text-neutral-content p-10">
            <aside>
                <Logo className="w-32" />

                <p>
                    武汉骰子奇兵文化有限公司
                    <br />
                    Wuhan DiceShock Culture Co., Ltd.
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">服务</h6>
                <Link href="/" className="link link-hover">
                    库存
                </Link>
                <Link href="/" className="link link-hover">
                    DiceShock Agents
                </Link>
                <Link href="/" className="link link-hover">
                    活动&比赛
                </Link>
                <Link href="/" className="link link-hover">
                    美团商家
                </Link>
            </nav>
            <nav>
                <h6 className="footer-title">关于我们</h6>
                <Link href="/" className="link link-hover">
                    加入我们
                </Link>
                <Link href="/" className="link link-hover">
                    服务条款
                </Link>
                <Link href="/" className="link link-hover">
                    Cookie policy
                </Link>
                <Link href="/" className="link link-hover">
                    联系我们
                </Link>
            </nav>
            <nav>
                <h6 className="footer-title">友情连接</h6>
                <Link href="/" className="link link-hover">
                    纯美苹果园
                </Link>
                <Link href="/" className="link link-hover">
                    集石桌游
                </Link>
            </nav>
        </footer>

        <div className="footer footer-center bg-base-300 text-base-content p-4">
            <aside>
                <p>
                    Power by Vercel.
                </p>
            </aside>
        </div>
    </>
);

export default Footer;
