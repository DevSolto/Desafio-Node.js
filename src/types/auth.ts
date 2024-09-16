import { z } from "zod";
import { loginBody } from "../schemas/auth";

export type LoginParams = z.infer<typeof loginBody>

export type UserJWT = {
  id: string
  role: string
}