"use client";

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import type React from "react";

export default function Provider({ children }: React.PropsWithChildren) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			{children}
		</ThemeProvider>
	);
}
