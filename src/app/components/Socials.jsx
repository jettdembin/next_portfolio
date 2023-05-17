import React from "react";

const Socials = () => {
	return (
		<div>
			<div
				className={`socials-cntr before:absolute before:content-[""] before:border before:border-solid before:border-white before:h-32 before:left-1/2 before:bottom before:-translate-x-1/2`}
				style={{ position: "fixed", bottom: "0", left: "1.5rem" }}
			>
				<div className="socials w-9 flex flex-col relative -top-20">
					<a href="https://www.linkedin.com/in/jettdembin/" target="_blank">
						<img
							className="social-img filter pb-1"
							id="bit"
							src="/assets/socials/linkedin.svg"
							alt="LinkedIn"
						/>
					</a>
					<a href="https://www.github.com/jettdembin" target="_blank">
						<img
							className="social-img"
							id="github"
							src="/assets/github.png"
							alt="GitHub"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;
