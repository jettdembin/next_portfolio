"use client";

import { SectionWrapper } from "../hoc";

import { motion } from "framer-motion";

import { styles } from "../styles/styles";
import { textVariant } from "../utils/motion";

const Contact = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText}`}>Say hello 👋</p>
				<h2 className={`${styles.sectionHeadText}`}>Connect.</h2>
			</motion.div>
			<form>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div>
						<label htmlFor="name" className="block mb-2">
							Name
						</label>
						<input
							type="text"
							name="name"
							id="name"
							className="border-2 border-gray-300 rounded-lg w-full py-2 px-4"
						/>
					</div>
					<div>
						<label htmlFor="email" className="block mb-2">
							Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="border-2 border-gray-300 rounded-lg w-full py-2 px-4"
						/>
					</div>
				</div>
				<div className="mt-8">
					<label htmlFor="message" className="block mb-2">
						Message
					</label>
					<textarea
						name="message"
						id="message"
						rows="6"
						className="border-2 border-gray-300 rounded-lg w-full py-2 px-4"
					></textarea>
				</div>
				<div className="mt-8">
					<button
						type="submit"
						className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg"
					>
						Send Message
					</button>
				</div>
			</form>
		</>
	);
};

export default SectionWrapper(Contact, "contact");

// <section
// 	className="bg-gradient-to-r from-blue-500 to-purple-300 text-gray-800 py-20 px-10"
// 	id="contact"
// >
// 	<div className="container mx-auto px-4">
// 		{/* <h1 className="text-4xl font-bold mb-10">Connect.</h1> */}

// 	</div>
// </section>
