import "./styles/globals.css";

export const metadata = {
	title: "Jett Dembin - Front End Software Developer",
	description: "Personal Portfolio",
};

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
