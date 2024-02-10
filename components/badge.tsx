//The Request method badge used in docs

import { useTheme } from "nextra-theme-docs";

export interface BadgeProps {
	children: React.ReactNode;
	method: "GET" | "POST" | "DELETE" | "PATCH";
}

function getColor(method: BadgeProps["method"]) {
	const { theme } = useTheme();
	switch (method) {
		case "POST":
			return "blue";
		case "DELETE":
			return "red";
		case "PATCH":
			return "orange";
		default:
		case "GET":
			return theme === "dark" ? "lightgreen" : "green";
	}
}

export default function Badge({ children, method }: BadgeProps) {
	return (
		<span
			style={{
				color: getColor(method)
			}}
		>
			{children}
		</span>
	);
}
