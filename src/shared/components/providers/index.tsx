"use client";

import { ThemeProvider } from "@/shared/components/providers/ThemeProvider";
import type React from "react";
import { Toaster } from "../ui/sonner";

export default function Provider({ children }: React.PropsWithChildren) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			{children}
			<Toaster />
		</ThemeProvider>
	);
}
