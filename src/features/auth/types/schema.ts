import { z } from "zod";

export const LoginSchema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(6),
});

export type TLoginRequest = z.infer<typeof LoginSchema>;
