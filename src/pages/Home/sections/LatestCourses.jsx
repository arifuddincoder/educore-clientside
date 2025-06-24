import React from "react";
import CourseCard from "./CourseCard/CourseCard";

const LatestCourses = ({ latestCourses }) => {
	return (
		<section className="container mx-auto lg:mt-5 mb-12 lg:mb-25 px-4">
			<h2 className="text-center font-semibold text-brand-blue mb-2">Latest Courses</h2>
			<p className="text-center text-brand-black1 font-semibold text-xl lg:text-[40px] mb-6 lg:mb-12">
				Upgrade Skills With EduCore
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
				{latestCourses.length === 0 ? (
					<>
						<h1>There is no data</h1>
					</>
				) : (
					latestCourses.map((course) => <CourseCard key={course._id} course={course}></CourseCard>)
				)}
			</div>
		</section>
	);
};

export default LatestCourses;
