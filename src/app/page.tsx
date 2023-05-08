"use client";

import { useRef, useEffect } from "react";

import gsap from "gsap";

// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

import Navbar from "./layout/Navbar";
import Hero from "./layout/Hero";
import About from "./components/About";
import Journey from "./layout/Journey";
import Projects from "./layout/Projects";
import Contact from "./layout/Contact";
import Footer from "./layout/Footer";
import Banner from "./components/Banner";

// End of Mouse Circle

export default function Home() {
	const containerRef = useRef(null);
	const introButtonRef = useRef(null);
	const pageWrapperRef = useRef(null);

	//gsap
	const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
	const tl2 = gsap.timeline({ defaults: { ease: "power2.inOut" } });

	const handleSeePortfolio = () => {
		if (pageWrapperRef.current == null) return;
		if (containerRef.current == null) return;
		pageWrapperRef.current.style.cssText = "opacity: 1; visibility: visible";
		containerRef.current.style.overflow = "visible";
		tl.set(".name-img", { transformOrigin: "left top" });
		tl.fromTo(introButtonRef.current, { y: "0%" }, { y: "80%", duration: 0.2 });
		tl2.to(".slider", { y: "-100%", duration: 1.5 });
		tl.fromTo(".banner", { opacity: 1 }, { opacity: 0, duration: 0.5 });
		tl.fromTo(
			".navbar-link",
			{ opacity: 0 },
			{ opacity: 1, duration: 1 },
			"+=.5"
		);
		tl.fromTo(".name-img", { opacity: 0 }, { opacity: 1, duration: 0.5 });
		tl.fromTo(".name-img", { rotation: 10 }, { rotation: 0, duration: 1 });
		tl.fromTo(".name", { y: "20%" }, { y: "0%", duration: 1 });
		tl.fromTo(".name", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
	};

	return (
		<div className="app" ref={containerRef}>
			<aside className="banner">
				<h1 className="intro">{"</JETT>"}</h1>
				<button
					className="intro-btn pointer-enter"
					ref={introButtonRef}
					onClick={handleSeePortfolio}
				>
					Welcome 🙌
				</button>
			</aside>
			<div className="page-wrapper" ref={pageWrapperRef}>
				<Navbar />
				<main>
					<Hero />
					<About />
					<Journey />
					<Projects />
					<Contact />
				</main>
				<Footer />
			</div>
			<div className="slider"></div>
		</div>
	);
}
