import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Navbar from "./layout/Navbar";
import Header from "./layout/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./layout/Footer";
import Banner from "./components/Banner";

export default function Home() {
	return (
		<main>
			<Navbar />
			<Header />
			{/* <Banner /> */}
			<About />
			<Projects />
			<Contact />
			<Footer />
		</main>
	);
}
