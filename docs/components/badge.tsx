import { useTheme } from "nextra-theme-docs";

export interface BadgeProps {
	children: React.ReactNode;
	method: "GET" | "POST" | "DELETE" | "PATCH" | "ANY";
	href?: string;
	rel?: string;
}

export function useColor(method: BadgeProps["method"], theme: string) {
	switch (method) {
		case "GET":
			return theme === "dark" ? "#90EE90" : "green";
		case "POST":
			return "blue";
		case "DELETE":
			return "red";
		case "PATCH":
			return "orange";
		default:
			return theme === "dark" ? "lightgrey" : "grey";
	}
}

export default function Badge({ children, method, href, rel }: BadgeProps) {
	const { resolvedTheme } = useTheme();
	const badgeColor = useColor(method, resolvedTheme);
	const isDarkTheme = resolvedTheme === "dark";

	return (
		<a
			style={{
				color: badgeColor,
				textDecoration: "none",
				backgroundColor: isDarkTheme ? "#3C3C39" : "inherit",
				borderRadius: "20px",
				padding: "2px 10px 5px 10px",
				border: isDarkTheme ? "solid 0.1px #4d4d4d" : "none"
			}}
			href={href}
			rel={rel}
		>
			{children}
		</a>
	);
}
