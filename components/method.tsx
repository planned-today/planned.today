//The Request method badge used in docs

import { getColor, BadgeProps } from "./badge";
import { useTheme } from "nextra-theme-docs";

export interface MethodProps {
	method: BadgeProps["method"];
	href?: string;
	rel?: string;
}

export default function Method({ method, href, rel }: MethodProps) {
	const { resolvedTheme } = useTheme();
	return (
		<a
			style={{
				color: getColor(method),
				textDecoration: "none",
				backgroundColor: resolvedTheme === "dark" ? "rgba(255,255,255,.1)" : "rgba(0, 0, 0, 0.03)",
				borderColor: resolvedTheme === "dark" ? "rgba(255,255,255,.1)" : "rgba(0, 0, 0, 0.03)",
				borderWidth: "1px",
				borderRadius: "20px",
				padding: "2px 10px 5px 10px"
			}}
			href={href}
			rel={rel}
		>
			{method.toLowerCase()}
		</a>
	);
}
