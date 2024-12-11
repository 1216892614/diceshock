import { z } from "zod";

export const unumZ = z.number().int().positive();
export const unumRangeZ = z.tuple([unumZ, unumZ]).or(unumZ);

export const tagsZ = z
    .string()
    .array()
    .transform((arr) => new Set(arr))
    .or(z.set(z.string()))
    .default([]);
