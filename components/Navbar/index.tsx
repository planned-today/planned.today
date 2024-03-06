import Image from "next/image";
import React from "react";
import styles from "./index.module.css";

interface Props {}

function Navbar(props: Props) {
	const {} = props;

	return (
		<nav>
			<Image
				src="/logo.png"
				alt="Planned.today"
				width={100}
				height={100}
				className={styles.logo}
			/>
			<ul className={styles.navLinks}>
				<li>Home</li>
				<li>Tasks</li>
				<li>Calendar</li>
				<li>Settings</li>
			</ul>
		</nav>
	);
}

export default Navbar;
