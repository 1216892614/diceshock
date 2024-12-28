import { FilterCfg } from "@/components/GameList/Filter";

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

const searchGames = async (
    page: number = 1,
    filter?: FilterCfg,
    abortSignal?: AbortSignal
) => {
    const headers = new Headers();

    headers.append("Content-Type", "application/x-www-form-urlencoded");

    const res = await fetch(
        "/api/gstonegames/app/other_user_get_game/owned_games/",
        {
            method: "POST",
            headers,
            body: JSON.stringify({
                user_id: "124991",
                page,
                name: Boolean(filter?.searchWords)
                    ? filter?.searchWords
                    : void 0,
            }),
            signal: abortSignal,
        }
    )
        .then((r) => r.json())
        .catch(console.log);

    if (!Array.isArray(res?.data?.game_list)) {
        return null;
    }

    return res?.data?.game_list as BoardGame[];
};

export default searchGames;
