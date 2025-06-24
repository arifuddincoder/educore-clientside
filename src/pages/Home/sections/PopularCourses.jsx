import React from "react";
import CourseCard from "./CourseCard/CourseCard";

const PopularCourses = ({ popularCourses }) => {
	return (
		<section className="container mx-auto lg:mt-5 py-12 lg:py-25 px-4">
			<h2 className="text-center font-semibold text-brand-blue mb-2">Popular Courses</h2>
			<p className="text-center text-brand-black1 font-semibold text-xl lg:text-[40px] mb-6 lg:mb-12">
				Top Picks By Learners
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
				{popularCourses?.filter(Boolean).length === 0 ? (
					<h1 className="text-center text-gray-500">There is no popular course found</h1>
				) : (
					popularCourses.filter(Boolean).map((course) => <CourseCard key={course._id} course={course} />)
				)}
			</div>
		</section>
	);
};

export default PopularCourses;
