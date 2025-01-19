interface GlobalResponse<T> {
	success: boolean;
	message: string;
	data: T;
}

export async function responseHandler<T>(
	response: Response,
): Promise<GlobalResponse<T>> {
	if (!response.ok) {
		try {
			const errorData = await response.json();
			return {
				success: false,
				message:
					errorData.payload.error ||
					`Error: ${response.status} ${response.statusText}`,
				data: null as T,
			};
		} catch (e) {
			return {
				success: false,
				message: `Error: ${response.status} ${response.statusText}`,
				data: null as T,
			};
		}
	}

	try {
		const data = await response.json();
		return {
			success: true,
			message: data.message || "Success",
			data: data.payload,
		};
	} catch (e) {
		return {
			success: false,
			message: "Error parsing response data",
			data: null as T,
		};
	}
}
