"use client";

import { atom, useSetAtom } from "jotai";
import React from "react";
import { useSpringValue, animated } from "@react-spring/web";

import useAMoment from "@/hooks/useAMoment";
import { CheckCircle, X } from "@phosphor-icons/react/dist/ssr";
import dynamic from "next/dynamic";

const ClientSide = dynamic(() => import("./ClientSide"), { ssr: false });

const Msg = () => <ClientSide />;

export default Msg;

export const msgA = atom(null as React.ReactNode);

export const useMsg = () => {
    const progress = useSpringValue(1);
    const setComp = useSetAtom(msgA);
    const { styles, show } = useAMoment(progress, {
        onRest: () => setComp(null),
    });

    return {
        info: (tx: string) =>
            show(() =>
                setComp(
                    <animated.div style={styles} role="alert" className="alert">
                        <CheckCircle className="size-8 text-info" />
                        <span>{tx}</span>
                        <div>
                            <button className="btn btn-sm btn-ghost btn-square">
                                <X className="size-6" />
                            </button>
                        </div>
                    </animated.div>
                )
            ),
        success: (tx: string) =>
            show(() =>
                setComp(
                    <animated.div style={styles} role="alert" className="alert">
                        <CheckCircle className="size-8 text-success" />
                        <span>{tx}</span>
                        <div>
                            <button className="btn btn-sm btn-ghost btn-square">
                                <X className="size-6" />
                            </button>
                        </div>
                    </animated.div>
                )
            ),
        warning: (tx: string) =>
            show(() =>
                setComp(
                    <animated.div style={styles} role="alert" className="alert">
                        <CheckCircle className="size-8 text-warning" />
                        <span>{tx}</span>
                        <div>
                            <button className="btn btn-sm btn-ghost btn-square">
                                <X className="size-6" />
                            </button>
                        </div>
                    </animated.div>
                )
            ),
        error: (tx: string) =>
            show(() =>
                setComp(
                    <animated.div style={styles} role="alert" className="alert">
                        <CheckCircle className="size-8 text-error" />
                        <span>{tx}</span>
                        <div>
                            <button className="btn btn-sm btn-ghost btn-square">
                                <X className="size-6" />
                            </button>
                        </div>
                    </animated.div>
                )
            ),
    };
};
