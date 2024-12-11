"use client";

import React, { useRef } from "react";
import { useAtom } from "jotai";
import { atomWithImmer } from "jotai-immer";
import {
    Backspace,
    Confetti,
    FlagBanner,
    Funnel,
    MagnifyingGlass,
    Scroll,
} from "@phosphor-icons/react/dist/ssr";

import { toggleArr } from "@/utils/arr";

const filterCfgA = atomWithImmer<{
    tags: ("SCORE_RACE" | "RPG" | "PARTY")[];
    numOfPlayers: number | null;
    isBestNumOfPlayers: boolean;
    searchWords: string;
}>({
    tags: [],
    numOfPlayers: null,
    isBestNumOfPlayers: false,
    searchWords: "",
});

const Filter = () => {
    const [filter, setFilter] = useAtom(filterCfgA);

    const dialogRef = useRef<HTMLDialogElement>(null);

    return (
        <>
            <div className="w-full flex flex-col">
                <div className="w-full flex flex-wrap justify-between">
                    <label className="input input-bordered input-lg flex items-center w-full m-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="搜索库存中的桌游"
                            value={filter.searchWords}
                            onChange={(evt) =>
                                setFilter((draft) => {
                                    draft.searchWords = evt.target.value;
                                })
                            }
                        />

                        <button
                            className="btn btn-md btn-square ml-3 lg:hidden"
                            onClick={() => dialogRef.current?.showModal()}
                        >
                            <Funnel className="size-8" weight="fill" />
                        </button>

                        <MagnifyingGlass
                            weight="bold"
                            className="h-7 w-7 opacity-70 hidden sm:block"
                        />
                    </label>

                    <dialog ref={dialogRef} className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">过滤器</h3>
                            <div className="w-full -mx-2 flex flex-col justify-center items-center overflow-hidden">
                                <div className="m-2 join [&_svg]:hidden md:[&_svg]:block">
                                    <label className="btn btn-lg join-item bg-base-100 flex-row flex-nowrap text-nowrap">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            checked={filter.tags.includes(
                                                "PARTY"
                                            )}
                                            onChange={() =>
                                                setFilter((draft) => {
                                                    draft.tags = toggleArr(
                                                        draft.tags,
                                                        "PARTY"
                                                    );
                                                })
                                            }
                                        />
                                        派对
                                        <Confetti className="h-7 w-7" />
                                    </label>

                                    <label className="btn btn-lg join-item bg-base-100 flex-row flex-nowrap text-nowrap">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            checked={filter.tags.includes(
                                                "SCORE_RACE"
                                            )}
                                            onChange={() =>
                                                setFilter((draft) => {
                                                    draft.tags = toggleArr(
                                                        draft.tags,
                                                        "SCORE_RACE"
                                                    );
                                                })
                                            }
                                        />
                                        跑分
                                        <FlagBanner className="h-7 w-7" />
                                    </label>

                                    <label className="btn btn-lg join-item bg-base-100 flex-row flex-nowrap text-nowrap">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            checked={filter.tags.includes(
                                                "RPG"
                                            )}
                                            onChange={() =>
                                                setFilter((draft) => {
                                                    draft.tags = toggleArr(
                                                        draft.tags,
                                                        "RPG"
                                                    );
                                                })
                                            }
                                        />
                                        扮演
                                        <Scroll className="h-7 w-7" />
                                    </label>
                                </div>

                                <div>
                                    <div className="flex items-center flex-shrink-0 m-2 p-2 bg-base-100 rounded-b-none md:rounded-b-lg rounded-lg">
                                        <input
                                            type="range"
                                            step={1}
                                            min={0}
                                            max="10"
                                            value={filter.numOfPlayers ?? "0"}
                                            onChange={(evt) =>
                                                setFilter((draft) => {
                                                    draft.numOfPlayers =
                                                        evt.target.value === "0"
                                                            ? null
                                                            : Number.parseInt(
                                                                  evt.target
                                                                      .value
                                                              );
                                                })
                                            }
                                            className="range range-lg w-[14rem] sm:w-[20rem] mx-2"
                                        />

                                        <button
                                            onClick={() =>
                                                setFilter((draft) => {
                                                    draft.numOfPlayers = null;
                                                })
                                            }
                                            className="btn btn-md w-20 hover:btn-secondary [&_.num]:hover:hidden [&_.del]:hidden [&_.del]:hover:block"
                                        >
                                            {typeof filter.numOfPlayers ===
                                            "number" ? (
                                                <>
                                                    <span className="num">
                                                        {`${filter.numOfPlayers}人`}
                                                    </span>
                                                    <Backspace className="del size-8" />
                                                </>
                                            ) : (
                                                "无限制"
                                            )}
                                        </button>
                                    </div>

                                    <div className="form-control -mt-3">
                                        <label className="btn btn-lg rounded-t-none m-2 bg-base-100">
                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                                checked={
                                                    filter.isBestNumOfPlayers
                                                }
                                                onChange={(evt) =>
                                                    setFilter((draft) => {
                                                        draft.isBestNumOfPlayers =
                                                            evt.target.checked;
                                                    })
                                                }
                                            />
                                            <span className="label-text">
                                                最佳游戏人数
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>

                    <div className="m-2 join hidden lg:block">
                        <label className="btn btn-lg join-item bg-base-100 flex-row flex-nowrap text-nowrap">
                            <input
                                type="checkbox"
                                className="checkbox"
                                checked={filter.tags.includes("PARTY")}
                                onChange={() =>
                                    setFilter((draft) => {
                                        draft.tags = toggleArr(
                                            draft.tags,
                                            "PARTY"
                                        );
                                    })
                                }
                            />
                            派对
                            <Confetti className="h-7 w-7" />
                        </label>

                        <label className="btn btn-lg join-item bg-base-100 flex-row flex-nowrap text-nowrap">
                            <input
                                type="checkbox"
                                className="checkbox"
                                checked={filter.tags.includes("SCORE_RACE")}
                                onChange={() =>
                                    setFilter((draft) => {
                                        draft.tags = toggleArr(
                                            draft.tags,
                                            "SCORE_RACE"
                                        );
                                    })
                                }
                            />
                            跑分
                            <FlagBanner className="h-7 w-7" />
                        </label>

                        <label className="btn btn-lg join-item bg-base-100 flex-row flex-nowrap text-nowrap">
                            <input
                                type="checkbox"
                                className="checkbox"
                                checked={filter.tags.includes("RPG")}
                                onChange={() =>
                                    setFilter((draft) => {
                                        draft.tags = toggleArr(
                                            draft.tags,
                                            "RPG"
                                        );
                                    })
                                }
                            />
                            扮演
                            <Scroll className="h-7 w-7" />
                        </label>
                    </div>

                    <div className="hidden lg:flex items-center flex-shrink-0 m-2 p-2 bg-base-100 rounded-b-none md:rounded-b-lg rounded-lg">
                        <div className="form-control hidden md:flex">
                            <label className="btn btn-md">
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    checked={filter.isBestNumOfPlayers}
                                    onChange={(evt) =>
                                        setFilter((draft) => {
                                            draft.isBestNumOfPlayers =
                                                evt.target.checked;
                                        })
                                    }
                                />
                                <span className="label-text">最佳游戏人数</span>
                            </label>
                        </div>

                        <input
                            type="range"
                            step={1}
                            min={0}
                            max="10"
                            value={filter.numOfPlayers ?? "0"}
                            onChange={(evt) =>
                                setFilter((draft) => {
                                    draft.numOfPlayers =
                                        evt.target.value === "0"
                                            ? null
                                            : Number.parseInt(evt.target.value);
                                })
                            }
                            className="range range-lg w-[14rem] sm:w-[20rem] mx-2"
                        />

                        <button
                            onClick={() =>
                                setFilter((draft) => {
                                    draft.numOfPlayers = null;
                                })
                            }
                            className="btn btn-md w-20 hover:btn-secondary [&_.num]:hover:hidden [&_.del]:hidden [&_.del]:hover:block"
                        >
                            {typeof filter.numOfPlayers === "number" ? (
                                <>
                                    <span className="num">
                                        {`${filter.numOfPlayers}人`}
                                    </span>
                                    <Backspace className="del size-8" />
                                </>
                            ) : (
                                "无限制"
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Filter;
