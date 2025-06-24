import React from "react";

const WhyLearnWithUsCard = ({ icon, title, description, bgColor }) => {
	return (
		<div
			className="bg-white p-6 rounded-xl border border-brand-gray2 text-center transition duration-300"
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
			<div
				className={`w-12 h-12 flex items-center justify-center rounded-lg text-white text-2xl mx-auto mb-4 ${bgColor}`}
			>
				{icon}
			</div>
			<h3 className="text-lg font-semibold mb-2">{title}</h3>
			<p className="text-gray-600 text-sm">{description}</p>
		</div>
	);
};

export default WhyLearnWithUsCard;
