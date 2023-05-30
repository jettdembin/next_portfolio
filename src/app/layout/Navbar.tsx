"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

export default function Navbar() {
	const [isNavShowing, setIsNavShowing] = useState(true);
	const [isMenuShowing, setIsMenuShowing] = useState(false);

	//listen for scroll up or scroll down to animate nav
	useEffect(() => {
		let prevScrollPos = window.pageYOffset;

		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;

			if (prevScrollPos > currentScrollPos) {
				setIsNavShowing(true); // Scroll up

				setIsMenuShowing(false);
			} else {
				setIsNavShowing(false); // Scroll down

				setIsMenuShowing(true);
			}

			prevScrollPos = currentScrollPos;
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const menuIcon = (
		<div
			className={`menu-icon w-8 h-5 flex flex-col items-center justify-around  ${
				isMenuShowing ? "show-menu-icon" : ""
			}`}
			onClick={() => {
				setIsMenuShowing(false);
				setIsNavShowing(true);
			}}
		>
			<div className="menu-icon-line"></div>
			<div className="menu-icon-line"></div>
		</div>
	);

	return (
		<nav className="fixed w-full flex items-center justify-between px-8 py-4 bg-gradient-to-r">
			<div className="text-white font-bold border border-solid border-white">
				<h2>{`</Jett>`}</h2>
			</div>

			<motion.ul
				className="flex space-x-8"
				initial="show"
				animate={isNavShowing ? "show" : "hidden"}
				variants={fadeIn("left", "spring", 0, 1)}
			>
				<li className="text-white">Home</li>
				<li className="text-white">Projects</li>
				<li className="text-white">About</li>
				<li className="text-white">Contact</li>
			</motion.ul>

			{menuIcon}
		</nav>
	);
}

{
	/* ${isMenuShowing ? "show-menu-icon" : ""} */
}
