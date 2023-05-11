"use client";

import { hero_intro } from "../../../public/assets/index";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="flex items-center justify-center h-screen bg-cover bg-center text-white">
			<div className="main-img-section">
				<div className="main-img-cntr">
					<h1 className="name place-above text-9xl relative z-10">
						Jett Dembin
					</h1>
					<div className="flex items-center relative">
						<Image
							className="name-img mx-auto relative -top-5"
							src={hero_intro}
							alt="Intro Hero Image"
							role="presentation"
							width={500}
							height={2000}
						/>
					</div>
					<p className="name text-center text-xl">Self-taught Development.</p>
				</div>
			</div>
		</section>
	);
}
