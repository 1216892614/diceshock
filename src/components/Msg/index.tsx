"use client";

import dynamic from "next/dynamic";

const ClientSide = dynamic(() => import("./ClientSide"), { ssr: false });

const Msg = () => <ClientSide />;

export default Msg;
