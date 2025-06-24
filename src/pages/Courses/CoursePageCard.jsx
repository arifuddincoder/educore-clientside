import dayjs from "dayjs";
import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { Link } from "react-router";
const CoursePageCard = ({ course }) => {
	const { _id, title, price, totalLessons, category, description, image, createdAt } = course;
	return (
		<div
			className="border border-brand-gray2 p-4 md:p-6 rounded-xl"
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
			<figure>
				<img className="rounded-xl w-full h-[250px] object-cover object-center" src={image} alt={title} />
			</figure>
			<div className="flex flex-wrap gap-2 mt-4 mb-2 text-sm text-brand-gray1">
				<h5 className="text-brand-blue">{category}</h5>
				<p>Created at: {dayjs(createdAt).format("DD MMM YYYY")}</p>
			</div>
			<div className="flex justify-between gap-1 items-center font-semibold flex-wrap mb-2">
				<h3>{title}</h3>
				<p>${price}</p>
			</div>
			<p className="mb-2 text-brand-gray1">{description.split("").slice(0, 150).join("") + "..."}</p>
			<div className="flex items-center gap-1 text-sm text-brand-gray1 mb-4">
				<FaGraduationCap color="#FB6238" size={18} /> {totalLessons} Lessons
			</div>
			<Link
				to={`/course-details/${_id}`}
				className="text-sm bg-brand-blue text-white rounded-4xl border-0 font-medium py-1.5 px-4 hover:bg-blue-700 cursor-pointer max-w-[250px]"
			>
				View Details
			</Link>
		</div>
	);
};

export default CoursePageCard;
