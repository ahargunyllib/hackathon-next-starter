import * as jose from "jose";

interface TokenPayload {
	iss: string;
	exp: number;
	user_id: string;
	role_name: string;
}

export function decodeToken(token: string): TokenPayload {
	return jose.decodeJwt(token);
}
