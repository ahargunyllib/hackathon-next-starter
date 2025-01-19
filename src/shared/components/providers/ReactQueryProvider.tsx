import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

export default function ReactQueryProvider({
	children,
}: React.PropsWithChildren) {
	const [queryClient] = React.useState(() => {
		return new QueryClient();
	});

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
}
