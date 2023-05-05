import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Navbar from "./layout/Navbar";
import Hero from "./layout/Hero";
import About from "./components/About";
import Projects from "./layout/Projects";
import Contact from "./layout/Contact";
import Footer from "./layout/Footer";
import Banner from "./components/Banner";

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				{/* <Hero /> */}
				{/* <Banner /> */}
				<About />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
