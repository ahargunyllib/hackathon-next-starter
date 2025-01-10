"use server";

import {
	createSession,
	destroySession,
	getSession,
} from "@/shared/lib/session";
import { AuthService } from "../services/login";
import type { ILoginRequest } from "../types/request";

export async function login(payload: ILoginRequest) {
	const res = await AuthService.login(payload);

	if (res.success) {
		await createSession(res.data.access_token);
	}

	return res;
}

export async function logout() {
	await destroySession();
}
