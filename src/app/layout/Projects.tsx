"use client";

import { projects } from "../constants/index";

import Project from "../components/Projects/Project";

export default function Projects() {
	return (
		<section className="py-20 px-10" id="projects">
			<div className="container mx-auto">
				<h2 className="mb-8 text-4xl font-bold">Works.</h2>

				<div className="mt-20 sm:flex sm:flex-wrap gap-10 justify-center lg:justify-normal">
					{projects.map((project, index) => (
						<Project key={project.name} index={index} {...project} />
					))}
				</div>
			</div>
		</section>
	);
}
