import React from "react";
import {
	FaCode,
	FaChartLine,
	FaPaintBrush,
	FaLanguage,
	FaBriefcase,
	FaShieldAlt,
	FaRobot,
	FaHandshake,
} from "react-icons/fa";

const categories = [
	{ name: "Web Development", icon: <FaCode /> },
	{ name: "Data Science", icon: <FaChartLine /> },
	{ name: "UI/UX Design", icon: <FaPaintBrush /> },
	{ name: "Programming Languages", icon: <FaLanguage /> },
	{ name: "Business & Marketing", icon: <FaBriefcase /> },
	{ name: "Cybersecurity", icon: <FaShieldAlt /> },
	{ name: "Artificial Intelligence", icon: <FaRobot /> },
	{ name: "Soft Skills", icon: <FaHandshake /> },
];

const FeaturedCategories = () => {
	return (
		<section className="bg-brand-gray3 py-10 lg:py-16 px-4">
			<h2 className="text-center font-semibold text-brand-blue mb-2">Popular Category</h2>
			<p className="text-center text-brand-black1 font-semibold text-xl lg:text-[40px] mb-6 lg:mb-12">
				Featured Topics by Category
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
				{categories.map((item, idx) => (
					<div
						key={idx}
						className="flex items-center gap-3 bg-white p-4 rounded-lg transition text-left border border-brand-gray2"
						style={{
							transition: "box-shadow 0.3s ease",
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.boxShadow = "16px 24px 36px 12px rgba(1, 11, 28, 0.04)";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.boxShadow = "none";
						}}
					>
						<div className="text-2xl text-blue-600">{item.icon}</div>
						<p className="text-gray-800 font-medium">{item.name}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default FeaturedCategories;
