"use client";

import { ThemeProvider } from "@/shared/components/providers/ThemeProvider";
import type React from "react";
import { Toaster } from "../ui/sonner";
import ReactQueryProvider from "./ReactQueryProvider";

export default function Provider({ children }: React.PropsWithChildren) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			<ReactQueryProvider>
				{children}
				<Toaster />
			</ReactQueryProvider>
		</ThemeProvider>
	);
}
