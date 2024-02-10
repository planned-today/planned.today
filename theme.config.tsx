import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
	logo: <img src="/sicsr-logo-light.svg" />,
	project: {
		link: "https://github.com/paraswtf/sicsr-time-table-docs/"
	},
	chat: {
		link: "https://discord.com"
	},
	docsRepositoryBase: "https://github.com/paraswtf/sicsr-time-table-docs/tree/main/",
	footer: {
		text: "Sicsr Time-Table Application Documentation"
	},
	primaryHue: 354,
	nextThemes: {
		defaultTheme: "light"
	}
};

export default config;
