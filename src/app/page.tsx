"use client";

import { useRef } from "react";

import gsap from "gsap";

// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

import About from "./components/About";
import Socials from "./components/Socials";
import Contact from "./layout/Contact";
import Footer from "./layout/Footer";
import Hero from "./layout/Hero";
import Journey from "./layout/Journey";
import Navbar from "./layout/Navbar";
import Projects from "./layout/Projects";

export default function Home() {
  const containerRef = useRef(null);
  const introButtonRef = useRef(null);
  const pageWrapperRef = useRef(null);

  //mouse circle
  const mouseCircleRef = useRef(null);
  const mouseDotRef = useRef(null);
  const mouseTextRef = useRef(null);

  // const mouseCircleFn = (x, y) => {
  // 	mouseCircleRef.current.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
  // 	mouseDotRef.current.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
  // };

  // const activeCursor = (e) => {
  // 	const item = e.target;
  // 	if (
  // 		item.classList.contains("pointer-enter") ||
  // 		item.classList.contains("slick-prev") ||
  // 		item.classList.contains("slick-next")
  // 	) {
  // 		mouseDotRef.current.classList.add("mouse-active");
  // 		mouseCircleRef.current.classList.add("mouse-active2");
  // 		mouseTextRef.current.innerHTML = `
  // 	<h1><i class='fas fa-arrow-right'></i></h1>
  // 	`;
  // 		gsap.to(mouseTextRef.current, 0.5, { scale: 1 });
  // 		gsap.to(mouseTextRef.current, 0.5, { opacity: 1 });
  // 	} else {
  // 		gsap.to(mouseTextRef.current, 0.5, { scale: 0.4 });
  // 		gsap.to(mouseTextRef.current, 0.5, { opacity: 0 });
  // 		mouseDotRef.current.classList.remove("mouse-active");
  // 		mouseCircleRef.current.classList.remove("mouse-active2");
  // 	}
  // };
  // const arrowToggle = (e) => {
  // 	gsap.to(mouseTextRef.current, 0.5, { scale: 0.4 });
  // 	gsap.to(mouseTextRef.current, 0.5, { opacity: 0 });
  // 	mouseDotRef.current.classList.remove("mouse-active");
  // 	mouseCircleRef.current.classList.remove("mouse-active2");
  // };

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

  // useEffect(() => {
  // 	let ignore;
  // 	if (ignore) return;
  // 	if (containerRef.current == null) return;

  // 	const handleMouseMove = (e) => {
  // 		let x = e.clientX;
  // 		let y = e.clientY;

  // 		mouseCircleFn(x, y);
  // 		activeCursor(e);
  // 	};

  // 	const hanldeMouseLeave = (e) => {
  // 		mouseCircleRef.current.style.opacity = "0";
  // 		mouseDotRef.current.style.opacity = "0";
  // 	};

  // 	containerRef.current.addEventListener("mousemove", handleMouseMove);
  // 	containerRef.current.addEventListener("mouseleave", hanldeMouseLeave);

  // 	return () => {
  // 		ignore = true;
  // 	};
  // }, [containerRef.current]);

  return (
    <div className="app" ref={containerRef}>
      <div className="mouse-circle place-above" ref={mouseCircleRef}></div>
      <div className="mouse-dot place-above" ref={mouseDotRef}>
        <span ref={mouseTextRef}></span>
      </div>
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
        <main className="px-3">
          <Hero />
          <About />
          <Journey />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
      <Socials />

      <div className="slider"></div>
    </div>
  );
}
