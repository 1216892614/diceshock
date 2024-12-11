import { z } from "zod";

export const categoryModeZ = z.union([
    z.object({
        sch_domain_value: z.literal("卡牌"),
        eng_domain_value: z.literal("Card"),
    }),
    z.object({
        sch_domain_value: z.literal("美式"),
        eng_domain_value: z.literal("American-style"),
    }),
    z.object({
        sch_domain_value: z.literal("解谜"),
        eng_domain_value: z.literal("Puzzle"),
    }),
    z.object({
        sch_domain_value: z.literal("德式"),
        eng_domain_value: z.literal("Euro-style"),
    }),
    z.object({
        sch_domain_value: z.literal("抽象"),
        eng_domain_value: z.literal("Abstract"),
    }),
    z.object({
        sch_domain_value: z.literal("聚会"),
        eng_domain_value: z.literal("Party"),
    }),
    z.object({
        sch_domain_value: z.literal("战棋"),
        eng_domain_value: z.literal("Wargame"),
    }),
    z.object({
        sch_domain_value: z.literal("亲子"),
        eng_domain_value: z.literal("Kids"),
    }),
    z.object({
        sch_domain_value: z.literal("扮演"),
        eng_domain_value: z.literal("Role Playing"),
    }),
]);

export const statusModeZ = z.union([
    z.object({
        sch_domain_value: z.literal("已出版"),
        eng_domain_value: z.literal("Published"),
    }),
    z.object({
        sch_domain_value: z.literal("已发布"),
        eng_domain_value: z.string(),
    }),
    z.object({
        sch_domain_value: z.literal("开发中"),
        eng_domain_value: z.string(),
    }),
    z.object({
        sch_domain_value: z.literal("众筹中"),
        eng_domain_value: z.string(),
    }),
]);

const playerNumArrZ = z.array(
    z.union([z.literal(0), z.literal(1), z.literal(2)])
);

const playerNumZ = playerNumArrZ.length(14).or(playerNumArrZ.length(13));

const oiToBoolZ = z.union([z.literal(0), z.literal(1)]).transform(Boolean);

export const BoardGameZ = z.object({
    is_mm: z.number(),
    sch_cover_url: z.string().url(),
    mode_id: z.number().positive().int(),
    sub_category: z.string().refine((tx) => {
        try {
            return Array.isArray(JSON.parse(tx));
        } catch {
            return false;
        }
    }),
    player_rating: z.number(),
    /** 是否为扩展 */
    is_expansion: oiToBoolZ,
    /** 英文封面 */
    eng_cover_url: z.string().url(),
    /** 英文名称 */
    eng_name: z.string(),
    /** 出厂语言, 设计的时候用的语言? */
    primary_language: z.union([z.literal("ENG"), z.literal("SCH")]),
    /** 递增序列号 */
    id: z.number(),
    /** 简单分类 */
    category: categoryModeZ,
    /** 中文名称 */
    sch_name: z.string(),
    /** 想玩 */
    is_like: oiToBoolZ,
    /** 英文封面长宽比 */
    eng_width_height: z.number(),
    /** 平均玩家时长(min) */
    average_time_per_player: z.number(),
    /** 是否评论 */
    is_comment: oiToBoolZ,
    /** 均为 0? */
    is_bought: oiToBoolZ,
    /** 销售情况?
     *
     * - 0: 无
     * - 1239: 盒装
     * - 1237: 独家
     * - 1238: 城限
     * - 1327: 实景
     */
    sales_mode_id: z.union([
        z.literal(0),
        z.literal(1239),
        z.literal(1237),
        z.literal(1238),
        z.literal(1327),
    ]),
    /** 最近更新时间 YYYY-mm-DD HH:MM:SS, 2022-12-01 17:23:19 */
    rating_update_time: z.string().optional(),
    sales_mode: categoryModeZ,
    /** 产品状态
     * - 310: "已出版"
     * - 311: "已发布"
     * - 312: "开发中"
     * - 313: "众筹中"
     */
    status: z.union([
        z.literal(310),
        z.literal(311),
        z.literal(312),
        z.literal(313),
    ]),
    mod_type: z.union([z.literal(1), z.literal(2)]),
    /** 不知道啥意思
     *
     * - 752
     * - 751
     * - 753
     * - 1323
     * - 1322
     */
    expansion_type: z.union([
        z.literal(752),
        z.literal(751),
        z.literal(753),
        z.literal(1323),
        z.literal(1322),
    ]),
    is_glight: oiToBoolZ,
    status_content: statusModeZ,
    /** 难度, 10分满分 */
    difficulty: z.number().positive().int(),
    player_num: playerNumZ,
    /** 中文封面长宽比 */
    sch_width_height: z.number(),
    /** 均为 1? */
    is_owned: oiToBoolZ,
    /** 出版年份 */
    publish_year: z.number().positive().int(),
    /** 玩家关系 */
    mode: z.union([
        z.object({
            sch_domain_value: z.literal("竞争"),
            eng_domain_value: z.literal("Competitive"),
        }),
        z.object({
            sch_domain_value: z.literal("合作"),
            eng_domain_value: z.literal("Coop"),
        }),
        z.object({
            sch_domain_value: z.literal("混合"),
            eng_domain_value: z.literal("Mixed"),
        }),
    ]),
    /** 集石评分 */
    gstone_rating: z.number().positive(),
});

export default BoardGameZ;
