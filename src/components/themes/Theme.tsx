"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
type Props = {
	children: React.ReactNode;
};
export default function ThemeWrapper({ children }: Props) {
	return (
		<ThemeProvider
			attribute="class"
			enableSystem={true}
			defaultTheme="dark"
		>
			{children}
		</ThemeProvider>
	);
}
