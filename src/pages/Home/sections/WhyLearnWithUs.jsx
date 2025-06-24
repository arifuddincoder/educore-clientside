import React from "react";
import { FaChalkboardTeacher, FaLaptopCode, FaInfinity, FaLayerGroup } from "react-icons/fa";
import WhyLearnWithUsCard from "./WhyLearnWithUsCard/WhyLearnWithUsCard";
const WhyLearnWithUs = () => {
	const features = [
		{
			icon: <FaChalkboardTeacher />,
			title: "Expert Instructors",
			description: "Learn from certified industry professionals with real-world experience.",
			bgColor: "bg-blue-500",
		},
		{
			icon: <FaLayerGroup />,
			title: "Structured Curriculum",
			description: "Clear learning paths with progress tracking.",
			bgColor: "bg-green-500",
		},
		{
			icon: <FaLaptopCode />,
			title: "Real Projects",
			description: "Apply your skills on real-world projects to build a portfolio.",
			bgColor: "bg-pink-500",
		},
		{
			icon: <FaInfinity />,
			title: "Lifetime Access",
			description: "Access your enrolled courses anytime with free future updates.",
			bgColor: "bg-orange-500",
		},
	];
	return (
		<section className="relative py-12 lg:py-20 overflow-hidden px-4 bg-brand-black1/10">
			<div className="absolute top-0 left-0 w-[400px] h-[300px] rounded-[276px] bg-[#A6CF4A99] blur-[250px] -z-10"></div>
			<div className="absolute top-0 right-0 w-[400px] h-[300px] rounded-[276px] bg-[#FF60A899] blur-[250px] -z-10"></div>

			<div className="container mx-auto">
				<h2 className="text-center font-semibold text-brand-blue mb-2">Why Choose Us</h2>
				<p className="text-center text-brand-black1 font-semibold text-xl lg:text-[40px] mb-6 lg:mb-8">
					Why Learn With EduCore
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
					{features.map((item, idx) => (
						<WhyLearnWithUsCard key={idx} {...item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyLearnWithUs;
