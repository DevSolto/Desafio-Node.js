import { z } from "zod";
import { loginBody } from "../schemas/auth";

export type loginParams = z.infer<typeof loginBody>