import React from "react";
import { Link } from "react-router";

const CourseListItem = ({ item }) => {
	const { _id, image, title, price } = item;
	return (
		<div className="flex gap-4">
			<figure className="min-w-[160px] min-h-[80px] w-40 h-20 flex-shrink-0 overflow-hidden rounded-md">
				<Link to={`/course-details/${_id}`}>
					<img src={image} alt={title} className="w-full h-full object-cover object-center transition duration-300" />
				</Link>
			</figure>
			<div>
				<Link to={`/course-details/${_id}`}>
					<h4 className="mb-1 font-medium">{title}</h4>
				</Link>
				<p className="text-brand-blue">${price}</p>
			</div>
		</div>
	);
};

export default CourseListItem;
