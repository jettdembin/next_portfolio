"use client";

export default function About() {
	return (
		<section
			className="relative bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 text-white py-16 px-10 slanted-border-top slanted-border-bottom"
			id="about"
		>
			<div className="container mx-auto">
				<h1 className="text-4xl font-bold mb-10">About Me</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div>
						<img
							src="profile.jpg"
							alt="Jett"
							className="rounded-lg w-full h-auto"
						/>
					</div>
					<div className="space-y-4">
						<p>
							Hi, I'm Jett. I'm a self-taught developer that loves to create and
							design. I look forward to meeting you. :)
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
