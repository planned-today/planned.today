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
	},
	icons: [
		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			url: "/icons/apple-touch-icon.png"
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/icons/favicon-32x32.png"
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/icons/favicon-16x16.png"
		},
		{
			rel: "manifest",
			url: "/icons/site.webmanifest"
		},
		{
			rel: "mask-icon",
			url: "/icons/safari-pinned-tab.svg",
			color: "#0d1117"
		},
		{
			rel: "shortcut icon",
			url: "/icons/favicon.ico"
		}
	]
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
