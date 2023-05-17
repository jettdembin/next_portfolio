import Image from "next/image";
import { logo } from "../../../public/assets/index";

export default function Navbar() {
	return (
		<nav className="flex items-center justify-between px-8 py-4 bg-gradient-to-r">
			<div className="text-white font-bold border border-solid border-white">
				<h2>{`</Jett>`}</h2>
			</div>
			<ul className="flex space-x-8">
				<li className="text-white">Home</li>
				<li className="text-white">Projects</li>
				<li className="text-white">About</li>
				<li className="text-white">Contact</li>
			</ul>
		</nav>
	);
}
