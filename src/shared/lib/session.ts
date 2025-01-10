import type { IUser } from "@/shared/types/user";
import { type SessionOptions, getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { decodeToken } from "./decode";
import { env } from "./env";

const MAX_AGE = 8 * 60 * 60 * 1000;

export interface SessionData {
	user?: IUser;
	role?: string;
	token?: string;
	isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
	isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
	password: env.SESSION_PASSWORD ?? "default-session-secret",
	cookieName: "iron-examples-app-router-client-component-route-handler-swr",
	cookieOptions: {
		maxAge: MAX_AGE - 60,
		secure: true,
	},
};

export async function getSession() {
	const session = await getIronSession<SessionData>(
		await cookies(),
		sessionOptions,
	);

	if (session.isLoggedIn !== true) {
		session.isLoggedIn = defaultSession.isLoggedIn;
		session.token = defaultSession.token;
		session.role = defaultSession.role;
	}

	return session;
}

export async function createSession(token: string) {
	const session = await getSession();
	const decoded = decodeToken(token);

	session.isLoggedIn = true;
	session.token = token;
	session.role = decoded.role_name;

	session.updateConfig({
		...sessionOptions,
		cookieOptions: {
			maxAge: decoded.exp * 1000 - Date.now() - 60,
		},
	});

	await session.save();
}

export async function destroySession() {
	const session = await getSession();
	session.destroy();
}
