"use client";

import { motion } from "framer-motion";

import Project from "../components/Projects/Project";
import Tech from "../components/Tech";

import { projects } from "../constants/index";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles/styles";
import { staggerContainer, textVariant } from "../utils/motion";

const Projects = () => {
	return (
		<>
			{/* <h2 className="mb-8 text-4xl font-bold">Works.</h2> */}
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText}`}>Recent projects</p>
				<h2 className={`${styles.sectionHeadText}`}>Works.</h2>
			</motion.div>

			<div className="mt-20 sm:flex sm:flex-wrap gap-10 justify-center lg:justify-normal">
				{/* <motion.section
					variants={staggerContainer()}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.25 }}
					className={`${styles.padding} relative z-0 sm:flex sm:flex-wrap gap-10 justify-center lg:justify-normal`}
				>*/}
				{projects.map((project, index) => (
					<motion.div variants={textVariant()}>
						<Project key={project.name} index={index} {...project} />
					</motion.div>
				))}
				{/* </motion.section> */}
				<Tech />
			</div>
		</>
	);
};

export default SectionWrapper(Projects, "works");
