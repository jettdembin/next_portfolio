"use client";

import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles/styles";
import { textVariant } from "../utils/motion";

const About = () => {
	return (
		// <section
		// 	className="relative bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 text-white py-16 px-10 slanted-border-top slanted-border-bottom"
		// 	id="about"
		// >
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} text-center`}>
					A little introduction
				</p>
				<h2 className={`${styles.sectionHeadText} text-center`}>About.</h2>
			</motion.div>
			<div className="container mx-auto mt-32">
				<p className="text-lg text-center">
					Hi, I'm Jett. I'm a self-taught developer that loves to create and
					design. I look forward to meeting you. :)
				</p>
			</div>
		</>
		// </section>
	);
};

export default SectionWrapper(About, "about");
