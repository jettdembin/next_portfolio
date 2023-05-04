import Project from "./Projects/Project";

export default function Projects() {
	return (
		<section className="container mx-auto py-20" id="projects">
			<h2 className="mb-8 text-4xl font-bold">Projects</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<Project
					title="Project 1"
					description="Project 1 description"
					imgSrc="project1.jpg"
				/>
				<Project
					title="Project 2"
					description="Project 2 description"
					imgSrc="project2.jpg"
				/>
				<Project
					title="Project 3"
					description="Project 3 description"
					imgSrc="project3.jpg"
				/>
			</div>
		</section>
	);
}
