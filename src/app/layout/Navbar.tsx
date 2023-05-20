"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

export default function Navbar() {
	const [isNavShowing, setIsNavShowing] = useState(true);

	useEffect(() => {
		let prevScrollPos = window.pageYOffset;

		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;

			if (prevScrollPos > currentScrollPos) {
				setIsNavShowing(true); // Scroll up
			} else {
				setIsNavShowing(false); // Scroll down
			}

			prevScrollPos = currentScrollPos;
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

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
		</nav>
	);
}
