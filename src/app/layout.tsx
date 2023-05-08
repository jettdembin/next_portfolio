import "./styles/globals.css";

import { Roboto } from "@next/font/google";

export const metadata = {
	title: "Jett Dembin - Front End Software Developer",
	description: "Personal Portfolio",
};

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-roboto",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
