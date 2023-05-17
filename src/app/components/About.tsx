"use client";

import { useEffect, useRef } from "react";

import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles/styles";
import { textVariant } from "../utils/motion";

const About = () => {
	const introTextContent =
		"Hi, I'm Jett. I'm a self-taught developer that loves to create and design. I look forward to meeting you. :)";

	const introTextRef = useRef();

	useEffect(() => {
		let ignore;
		if (ignore) return;
		if (introTextRef.current == null) return;

		Array.from(introTextContent).forEach((char) => {
			const span = document.createElement("span");
			span.textContent = char;
			introTextRef.current.appendChild(span);

			span.addEventListener("mouseenter", (e) => {
				e.target.style.animation = "aboutMeTextAnim 10s infinite";
			});
		});

		return () => {
			ignore = true;
		};
	}, []);

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText}`}>Introduction</p>
				<h2 className={`${styles.sectionHeadText}`}>About.</h2>
			</motion.div>
			<div className="container mx-auto mt-32">
				<p
					className="text-lg text-center intro-text transform"
					ref={introTextRef}
				></p>
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
