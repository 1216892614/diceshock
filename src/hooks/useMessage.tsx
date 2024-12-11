"use client";

import { animated, useSpringValue } from "@react-spring/web";
import { CheckCircle, X } from "@phosphor-icons/react/dist/ssr";
import { atom, useAtom } from "jotai";
import React from "react";

export const msgA = atom(null as React.ReactNode);

const useMessage = () => {
    const [msg, setMsg] = useAtom(msgA);

    const progress = useSpringValue(0);

    const success = (tx: string) => {
        progress.set(1);
        progress.start(0, {
            onRest: () => setMsg(null),
            delay: 4000,
            config: {
                friction: 30,
                tension: 120,
            },
        });

        setMsg(
            <animated.div
                style={{
                    zoom: progress.to((p) => 0.8 + p * 0.2),
                    opacity: progress,
                }}
                role="alert"
                className="alert"
            >
                <CheckCircle className="stroke-info h-6 w-6 shrink-0 text-success" />

                <span>{tx}</span>

                <div>
                    <button
                        onClick={() => setMsg(null)}
                        className="btn btn-md btn-square btn-ghost mr-2"
                    >
                        <X className="size-6" />
                    </button>
                </div>
            </animated.div>
        );
    };

    const warn = (tx: string) => {
        progress.set(1);
        progress.start(0);

        setMsg(
            <animated.div
                style={{
                    zoom: progress.to((p) => 0.8 + p * 0.2),
                    opacity: progress.to((p) => 0.7 + p * 0.3),
                }}
                role="alert"
                className="alert"
            >
                <CheckCircle className="stroke-info h-6 w-6 shrink-0 text-warning" />

                <span>{tx}</span>
                <div>
                    <button
                        onClick={() => setMsg(null)}
                        className="btn btn-md btn-square btn-ghost mr-2"
                    >
                        <X className="size-6" />
                    </button>
                </div>
            </animated.div>
        );
    };

    const err = (tx: string) => {
        progress.set(1);
        progress.start(0);

        setMsg(
            <animated.div
                style={{
                    zoom: progress.to((p) => 0.8 + p * 0.2),
                    opacity: progress.to((p) => 0.7 + p * 0.3),
                }}
                role="alert"
                className="alert"
            >
                <CheckCircle className="stroke-info h-6 w-6 shrink-0 text-error" />

                <span>{tx}</span>
                <div>
                    <button
                        onClick={() => setMsg(null)}
                        className="btn btn-md btn-square btn-ghost mr-2"
                    >
                        <X className="size-6" />
                    </button>
                </div>
            </animated.div>
        );
    };

    return { success, warn, err, comp: msg };
};

export default useMessage;
