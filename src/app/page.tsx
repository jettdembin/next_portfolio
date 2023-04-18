import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Navbar from "./layout/Navbar";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Header />
			<Footer />
		</div>
	);
}
