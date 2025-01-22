import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeWrapper from "@/components/themes/Theme";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "AI Chat Bot",
	description:
		"It's a chat Application powered by Gemini. I can answer your questions effectively.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark" style={{ colorScheme: "dark" }}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased `}
			>
				<ThemeWrapper>{children}</ThemeWrapper>
			</body>
		</html>
	);
}
