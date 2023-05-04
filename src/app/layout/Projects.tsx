"use client";

import { projects } from "../constants/index";

import Project from "../components/Projects/Project";

export default function Projects() {
	console.log(projects, "projects");
	return (
		<section className="container mx-auto py-20" id="projects">
			<h2 className="mb-8 text-4xl font-bold">Projects</h2>

			<div className="mt-20 flex flex-wrap gap-10">
				{projects.map((project, index) => (
					<Project key={project.name} index={index} {...project} />
				))}
			</div>
		</section>
	);
}
