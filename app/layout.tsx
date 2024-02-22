import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "./globals.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Planned.today",
	description: "A simple and easy to use room reservation system.",
	openGraph: {
		description: "A simple and easy to use room reservation system for educational institutions.",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Planned.today"
			}
		]
	}
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript />
			</head>
			<body className={inter.className}>
				<MantineProvider>{children}</MantineProvider>
			</body>
		</html>
	);
}
