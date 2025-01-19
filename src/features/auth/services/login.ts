import { env } from "@/shared/lib/env";
import { responseHandler } from "@/shared/lib/response-handler";
import type { LoginResponse } from "../types/response";
import type { TLoginRequest } from "../types/schema";

export async function login(payload: TLoginRequest) {
	const response = await fetch(`${env.API_URL}/auth/login`, {
		method: "POST",
		headers: {
			"x-api-key": `Key ${env.API_KEY}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
	});

	return responseHandler<LoginResponse>(response);
}

export const AuthService = {
	login,
};
