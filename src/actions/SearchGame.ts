"use server";

import { FilterCfg } from "@/components/GameList/Filter";
import ownedGames from "@/mock/owned";

export interface BoardGame {
    is_mm: number;
    sch_cover_url: string;
    mode_id: number;
    sub_category: string;
    player_rating: number;
    is_expansion: number;
    eng_cover_url: string;
    eng_name: string;
    primary_language: string;
    id: number;
    category: Category[];
    sch_name: string;
    is_like: number;
    eng_width_height: number;
    average_time_per_player: number;
    is_comment: number;
    is_bought: number;
    sales_mode_id: number;
    sales_mode: SalesMode;
    status: number;
    mod_type: number;
    expansion_type: number;
    is_glight: number;
    status_content: StatusContent;
    difficulty: number;
    player_num: number[];
    sch_width_height: number;
    is_owned: number;
    publish_year: number;
    mode: Mode;
    gstone_rating: number;
    rating_update_time?: string;
}

export interface Category {
    eng_domain_value: string;
    sch_domain_value: string;
}

export interface SalesMode {
    eng_domain_value: string;
    sch_domain_value: string;
}

export interface StatusContent {
    eng_domain_value: string;
    sch_domain_value: string;
}

export interface Mode {
    eng_domain_value: string;
    sch_domain_value: string;
}

const searchGames = async (filter?: FilterCfg, full?: boolean) => {
    const filed = ownedGames.filter(
        ({ sch_name, eng_name, category, player_num }) => {
            if (
                filter?.searchWords &&
                !sch_name.includes(filter.searchWords.trim()) &&
                !eng_name
                    .toLocaleLowerCase()
                    .includes(filter.searchWords.trim().toLocaleLowerCase())
            )
                return false;

            if (
                filter?.tags.includes("PARTY") &&
                category.every(
                    ({ eng_domain_value }) =>
                        !["Party", "Puzzle"].includes(eng_domain_value)
                )
            )
                return false;

            if (
                filter?.tags.includes("RPG") &&
                category.every(
                    ({ eng_domain_value }) =>
                        !["American-style", "Role Playing"].includes(
                            eng_domain_value
                        )
                )
            )
                return false;

            if (
                filter?.tags.includes("SCORE_RACE") &&
                category.every(
                    ({ eng_domain_value }) =>
                        !["Euro-style", "Abstract"].includes(eng_domain_value)
                )
            )
                return false;

            if (
                filter?.numOfPlayers &&
                filter.isBestNumOfPlayers &&
                !player_num?.[filter.numOfPlayers]
            )
                return false;

            if (
                filter?.numOfPlayers &&
                !filter.isBestNumOfPlayers &&
                player_num?.[filter.numOfPlayers] !== 2
            )
                return false;

            return true;
        }
    );

    if (full) return filed;

    return filed.slice(0, 20);
};

export default searchGames;
