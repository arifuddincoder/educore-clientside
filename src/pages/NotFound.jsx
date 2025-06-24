import React from "react";
import { Link, useRouteError } from "react-router";
import useTitle from "../hooks/useTitle";
import notfoundLottie from "../assets/lottie/notfound.json";
import Lottie from "lottie-react";
const NotFound = () => {
	const error = useRouteError();
	useTitle(`${error?.status} Not Found | EduCore Learning Platform`);
	return (
		<div className="py-24 text-center px-3">
			<div className="w-90 h-auto mx-auto mb-5">
				<Lottie animationData={notfoundLottie} loop={true} />
			</div>
			<h1 className="mb-8 text-7xl font-thin text-gray-900">{error?.status || 404}</h1>
			<p className="text-xl font-bold text-gray-900 md:text-2xl mb-8">
				{error?.error?.message || "Something Went Wrong!"}
			</p>
			<Link to="/">
				<button className="transition text-xl font-bold  px-8 py-3 text-white  rounded-full cursor-pointer bg-brand-blue hover:bg-blue-700">
					Go To Homepage
				</button>
			</Link>
		</div>
	);
};

export default NotFound;
