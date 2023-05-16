"use client";

import React from "react";

import { styles } from "../styles/styles";

import { BallCanvas, TestCanvas, TrtCanvas } from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
	return (
		<>
			<p className={`${styles.sectionSubText} mb-4`}>Experience With</p>
			<div className="flex flex-row flex-wrap justify-center gap-10">
				{technologies.map((technology) => {
					return (
						<div className="w-28 h-28" key={technology.name}>
							<BallCanvas icon={technology.icon} />
							{/* <TrtCanvas /> */}
							<p className="text-center">{technology.name}</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default SectionWrapper(Tech, "tech");
