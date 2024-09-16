import { createPermissionSchema } from "@/schemas/permissions";
import { z } from "zod";

export type CreatePermissionParams = z.infer<typeof createPermissionSchema>