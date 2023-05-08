"use client";

import { hero_intro } from "../assets/index";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="flex items-center justify-center h-screen bg-cover bg-center text-white">
			<div className="main-img-section">
				<div className="main-img-cntr">
					<h1 className="name place-above">Jett Dembin</h1>
					<Image
						className="name-img"
						src={hero_intro}
						alt="Intro Hero Image"
						role="presentation"
						width={500}
						height={800}
					/>
					<p className="name">Self-taught Development.</p>
				</div>
			</div>
		</section>
	);
}
