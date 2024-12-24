import { ThemeProvider } from "next-themes";
import type React from "react";

export default function Provider({ children }: React.PropsWithChildren) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			{children}
		</ThemeProvider>
	);
}
