"use client";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { fadeIn } from "../../utils/motion";

export default function Project({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
}) {
	return (
		// <div className="relative w-full h-64 bg-gray-100 mb-8">
		// 	<div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 fadeIn">
		// 		<div className="text-center">
		// 			<h3 className="mb-2 text-xl font-bold">{title}</h3>
		// 			<p>{description}</p>
		// 		</div>
		// 	</div>
		// 	<img
		// 		className="absolute inset-0 w-full h-full object-cover z-0"
		// 		src={imgSrc}
		// 		alt={title}
		// 	/>
		// </div>

		<Tilt
			options={{
				max: 45,
				scale: 1,
				speed: 450,
			}}
			className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full bg-slate-700"
		>
			<div className="relative w-full h-[230px]">
				<img
					src={image}
					alt="project_image"
					className="w-full h-full object-cover rounded-2xl"
				/>

				<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
					<div
						onClick={() => window.open(source_code_link, "_blank")}
						className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
					>
						<img
							src={""}
							alt="source code"
							className="w-1/2 h-1/2 object-contain"
						/>
					</div>
				</div>
			</div>

			<div className="mt-5">
				<h3 className="text-white font-bold text-[24px]">{name}</h3>
				<p className="mt-2 text-secondary text-[14px]">{description}</p>
			</div>

			<div className="mt-4 flex flex-wrap gap-2">
				{tags.map((tag) => (
					<p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
						#{tag.name}
					</p>
				))}
			</div>
		</Tilt>
	);
}
