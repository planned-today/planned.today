//The Request method badge used in docs

import { useTheme } from "nextra-theme-docs";

export interface BadgeProps {
	children: React.ReactNode;
	method: "GET" | "POST" | "DELETE" | "PATCH" | "ANY";
	href?: string;
	rel?: string;
}

export function getColor(method: BadgeProps["method"]) {
	const { resolvedTheme } = useTheme();
	switch (method) {
		case "POST":
			return "blue";
		case "DELETE":
			return "red";
		case "PATCH":
			return "orange";
		case "GET":
			return resolvedTheme === "dark" ? "lightgreen" : "green";
		default:
			return resolvedTheme === "dark" ? "lightgrey" : "grey";
	}
}

export default function Badge({ children, method, href, rel }: BadgeProps) {
	return (
		<a
			style={{
				color: getColor(method),
				textDecoration: "none"
			}}
			href={href}
			rel={rel}
		>
			{children}
		</a>
	);
}
