import { z } from "zod";

export const id = z.string().cuid()