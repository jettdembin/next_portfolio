"use client";

import { motion } from "framer-motion";

import Project from "../components/Projects/Project";

import { projects } from "../constants/index";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles/styles";
import { textVariant } from "../utils/motion";

const Projects = () => {
	return (
		<section className="py-20 px-10" id="projects">
			<div className="container mx-auto">
				{/* <h2 className="mb-8 text-4xl font-bold">Works.</h2> */}
				<motion.div variants={textVariant()}>
					<p className={`${styles.sectionSubText} text-center`}>
						My recent personal projects
					</p>
					<h2 className={`${styles.sectionHeadText} text-center`}>Works.</h2>
				</motion.div>

				<div className="mt-20 sm:flex sm:flex-wrap gap-10 justify-center lg:justify-normal">
					{projects.map((project, index) => (
						<Project key={project.name} index={index} {...project} />
					))}
				</div>
			</div>
		</section>
	);
};

export default SectionWrapper(Projects, "works");
