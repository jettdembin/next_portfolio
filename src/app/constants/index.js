import {
	ucf,
	gemaire,
	eagleview,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	tailwind,
	nodejs,
	git,
	figma,
	threejs,
} from "../../../public/assets";

const technologies = [
	{
		name: "HTML 5",
		icon: "/assets/tech/html.png",
	},
	{
		name: "CSS 3",
		icon: "/assets/tech/css.png",
	},
	{
		name: "SCSS",
		icon: "/assets/tech/scss.png",
	},
	{
		name: "JavaScript",
		icon: "/assets/tech/javascript.png",
	},
	{
		name: "TypeScript",
		icon: "/assets/tech/typescript.png",
	},
	{
		name: "React JS",
		icon: "/assets/tech/reactjs.png",
	},
	{
		name: "Next JS",
		icon: "/assets/tech/nextjs.png",
	},
	{
		name: "Tailwind CSS",
		icon: "/assets/tech/tailwind.png",
	},
	{
		name: "Material UI",
		icon: "/assets/tech/mui.png",
	},
	{
		name: "Node JS",
		icon: "/assets/tech/nodejs.png",
	},
	{
		name: "Prisma",
		icon: "/assets/tech/prisma.png",
	},
	{
		name: "Graphql",
		icon: "/assets/tech/graphql.png",
	},
	{
		name: "Webpack",
		icon: "/assets/tech/webpack.png",
	},
	{
		name: "git",
		icon: "/assets/tech/git.png",
	},
	{
		name: "Figma",
		icon: "/assets/tech/figma.png",
	},
];

const experiences = [
	{
		title: "Student",
		company_name: "University of Central Florida",
		icon: ucf,
		iconBg: "black",
		date: "August 2015 - May 2020",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Customer Service Representative",
		company_name: "Eagleview",
		icon: eagleview,
		iconBg: "#E6DEDD",
		date: "Jan 2021 - Feb 2022",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Frontend Developer / Designer",
		company_name: "Gemaire LLC",
		icon: gemaire,
		iconBg: "#383E56",
		date: "May 2022 - current",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
];

const projects = [
	{
		name: "Your Anime",
		description:
			"Web application that enables users to search anime. Logged in users may add to favorites, comment, rate, add to watch list, and more!",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "graphql",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "prisma",
				color: "pink-text-gradient",
			},
			{
				name: "railway",
				color: "pink-text-gradient",
			},
		],
		image: "",
		source_code_link: "https://github.com/",
	},
	{
		name: "Macro Meals",
		description:
			"Web-based platform that allows users to set a fitness goal and track their daily macros. Users may log in and save their daily macros to their profile page, tracking their long term progress.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "prisma",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: "",
		source_code_link: "https://github.com/",
	},
];

export { experiences, projects, technologies };
