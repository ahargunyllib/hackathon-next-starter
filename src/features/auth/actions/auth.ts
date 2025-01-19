"use server";

import { createSession, destroySession } from "@/shared/lib/session";
import { AuthService } from "../services/login";
import type { TLoginRequest } from "../types/schema";

export async function login(payload: TLoginRequest) {
	const res = await AuthService.login(payload);

	if (!res.success) {
		// Throwing for toast.promise to catch and display the error message
		throw new Error(res.message);
	}

	await createSession(res.data.access_token);
	return res;
}

export async function logout() {
	await destroySession();
}
