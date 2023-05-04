export default function Project({ title, description, imgSrc }) {
	return (
		<div className="relative w-full h-64 bg-gray-100 mb-8">
			<div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 fadeIn">
				<div className="text-center">
					<h3 className="mb-2 text-xl font-bold">{title}</h3>
					<p>{description}</p>
				</div>
			</div>
			<img
				className="absolute inset-0 w-full h-full object-cover z-0"
				src={imgSrc}
				alt={title}
			/>
		</div>
	);
}
