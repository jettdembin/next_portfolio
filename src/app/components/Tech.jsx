"use client";

import React from "react";

import { BallCanvas, TestCanvas, TrtCanvas } from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{technologies.map((technology) => {
				return (
					<div className="w-28 h-28" key={technology.name}>
						<BallCanvas icon={technology.icon} />
						{/* <TrtCanvas /> */}
					</div>
				);
			})}
		</div>
	);
};

export default SectionWrapper(Tech, "tech");
