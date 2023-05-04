"use client";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { fadeIn } from "../../utils/motion";

export default function Project({ index, title, icon }) {
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

		<Tilt className="xs:w-[250px] bg-slate-50">
			<motion.div
				variants={fadeIn("right", "spring", index * 0.5, 0.75)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
			>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
				>
					<img
						src={icon}
						alt="web-development"
						className="w-16 h-16 object-contain"
					/>

					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
}
