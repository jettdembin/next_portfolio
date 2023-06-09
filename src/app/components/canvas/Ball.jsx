"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
	Decal,
	Float,
	OrbitControls,
	Preload,
	useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

import Image from "next/image";

export const Ball = ({ imgUrl }) => {
	const [decal] = useTexture([imgUrl]);

	return (
		<Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
			<ambientLight intensity={0.25} />
			<directionalLight position={[0, 0, 0.05]} />
			<mesh castShadow receiveShadow scale={2.75}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color="#fff8eb"
					polygonOffset
					polygonOffsetFactor={-5}
					flatShading
				/>
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					scale={1}
					map={decal}
					flatShading
				/>
			</mesh>
		</Float>
	);
};

export const BallCanvas = ({ icon }) => {
	return (
		<Canvas
			frameloop="demand"
			dpr={[1, 2]}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} />
				<Ball imgUrl={icon} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export const Trt = () => {
	return (
		<Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
			<ambientLight intensity={0.25} />
			<directionalLight position={[0, 0, 0.05]} />
			<mesh castShadow receiveShadow scale={2.75}>
				<latheGeometry args={[12, 0, 6]} />
				<meshStandardMaterial color="#fff8eb" />
				{/* <Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					scale={1}
					flatShading
				/> */}
			</mesh>
		</Float>
	);
};

export const TrtCanvas = () => {
	return (
		<Canvas
			frameloop="demand"
			dpr={[1, 2]}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} />
				<Trt />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export const TestCanvas = () => {
	return (
		<>
			{/* <Image src={js} width={30} height={30} /> */}
			<img src={"/github.png"} width={30} height={30} />
		</>
	);
};

// export default BallCanvas;
