import React, { useState, useMemo } from "react";
import { useLoaderData } from "react-router";
import CoursePageCard from "./CoursePageCard";
import useTitle from "../../hooks/useTitle";

const Courses = () => {
	const { data } = useLoaderData();
	useTitle("All Courses | EduCore Learning Platform");

	const [sortBy, setSortBy] = useState("default");

	// sort করা হচ্ছে useMemo দিয়ে (performance friendly)
	const sortedCourses = useMemo(() => {
		if (sortBy === "name-asc") {
			return [...data].sort((a, b) => a.title.localeCompare(b.title));
		} else if (sortBy === "name-desc") {
			return [...data].sort((a, b) => b.title.localeCompare(a.title));
		} else if (sortBy === "price-low") {
			return [...data].sort((a, b) => a.price - b.price);
		} else if (sortBy === "price-high") {
			return [...data].sort((a, b) => b.price - a.price);
		}
		return data;
	}, [data, sortBy]);

	return (
		<>
			<div className="bg-brand-blue pt-12 pb-12 px-4">
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold text-white mb-2">Courses</h2>
				</div>
			</div>

			<div className="container mx-auto py-8 xl:py-12 px-4">
				{/* Sort dropdown */}
				<div className="mb-6 flex justify-end">
					<select
						className="px-4 py-2 border border-gray-300 rounded-md"
						value={sortBy}
						onChange={(e) => setSortBy(e.target.value)}
					>
						<option value="default">Sort by Default</option>
						<option value="name-asc">Title A-Z</option>
						<option value="name-desc">Title Z-A</option>
						<option value="price-low">Price Low to High</option>
						<option value="price-high">Price High to Low</option>
					</select>
				</div>

				{/* Courses Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4">
					{sortedCourses.map((course) => (
						<CoursePageCard key={course._id} course={course} />
					))}
				</div>
			</div>
		</>
	);
};

export default Courses;
