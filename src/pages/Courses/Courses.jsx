import React from "react";
import { useLoaderData } from "react-router";
import CoursePageCard from "./CoursePageCard";
import useTitle from "../../hooks/useTitle";

const Courses = () => {
	const courses = useLoaderData();
	useTitle("All Courses | EduCore Learning Platform");
	return (
		<>
			<div className="bg-brand-blue pt-12 pb-12 px-4">
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold text-white mb-2">Courses</h2>
				</div>
			</div>
			<div className="container mx-auto py-8 xl:py-12 px-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4">
					{courses.data.map((course) => (
						<CoursePageCard key={course._id} course={course}></CoursePageCard>
					))}
				</div>
			</div>
		</>
	);
};

export default Courses;
