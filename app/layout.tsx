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
	metadataBase: new URL("https://planned.today/"),
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
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/icons/apple-touch-icon.png?v=0"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/icons/favicon-32x32.png?v=0"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/icons/favicon-16x16.png?v=0"
				/>
				<link
					rel="manifest"
					href="/icons/site.webmanifest?v=0"
				/>
				<link
					rel="mask-icon"
					href="/icons/safari-pinned-tab.svg?v=0"
					color="#0d1117"
				/>
				<link
					rel="shortcut icon"
					href="/icons/favicon.ico?v=0"
				/>
				<meta
					name="msapplication-TileColor"
					content="#0d1117"
				/>
				<meta
					name="msapplication-config"
					content="/icons/browserconfig.xml?v=0"
				/>
				<meta
					name="theme-color"
					content="#ffffff"
				/>
			</head>
			<body className={inter.className}>
				<MantineProvider>{children}</MantineProvider>
			</body>
		</html>
	);
}
