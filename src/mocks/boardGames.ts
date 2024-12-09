import { z } from "zod";

import { boardGameZ } from "@/types/BoardGame";

const boardGames = [] satisfies z.infer<typeof boardGameZ>[];

export default boardGameZ.parse(boardGames);
