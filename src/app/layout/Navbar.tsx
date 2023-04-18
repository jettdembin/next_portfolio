import React from "react";

export default function Navbar() {
	return (
		<nav className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-indigo-900 to-indigo-700">
			<div className="text-white font-bold">Logo</div>
			<ul className="flex space-x-8">
				<li className="text-white">Home</li>
				<li className="text-white">Projects</li>
				<li className="text-white">About</li>
				<li className="text-white">Contact</li>
			</ul>
		</nav>
	);
}
