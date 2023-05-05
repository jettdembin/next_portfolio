"use client";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { fadeIn } from "../../utils/motion";
import { github, web } from "../../assets/index";
import Image from "next/image";

export default function Project({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
}) {
	return (
		<Tilt
			options={{
				max: 45,
				scale: 1,
				speed: 450,
			}}
			className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full bg-slate-700 flex flex-col"
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

			<div className="mt-5 mb-4">
				<div className="flex justify-between">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>

					<div className="flex items-end gap-2">
						<div className="flex items-end gap-1">
							<p>Github</p>
							<Image
								src={github}
								width={25}
								alt="source code"
								className="object-contain"
							/>
						</div>
						<div className="flex items-end gap-1">
							<p>Demo</p>
							<Image
								src={web}
								width={25}
								alt="source code"
								className="object-contain"
							/>
						</div>
					</div>
				</div>

				<p className="mt-2 text-secondary text-[14px]">{description}</p>
			</div>

			<div className="mt-auto flex flex-wrap gap-2">
				{tags.map((tag) => (
					<p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
						#{tag.name}
					</p>
				))}
			</div>
		</Tilt>
	);
}
