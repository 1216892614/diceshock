import { z } from "zod";

import { tagsZ, unumRangeZ } from "./utils";

export const boardGameZ = z.object({
  "cnName": z.string().optional(),
  "sourceName": z.string().optional(),
  "NumOfPlayerRange": unumRangeZ,
  "bestNumOfPlayerRange": unumRangeZ,
  "bggScore": z.number().positive(),
  "tags": tagsZ,
  "difficultyRange": unumRangeZ,
  "gameTimeInMinPerPerson": z.number(),
  "languages": tagsZ,
});
