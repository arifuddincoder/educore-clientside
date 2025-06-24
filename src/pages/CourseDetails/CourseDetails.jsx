import React, { useEffect, useState } from "react";
import { FaRegBookmark, FaStar, FaUserFriends } from "react-icons/fa";
import { FiBarChart } from "react-icons/fi";
import { AiFillClockCircle } from "react-icons/ai";
import { FaCirclePlay } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";
import { useLoaderData } from "react-router";
import UseAuth from "../../hooks/useAuth";
import axios from "axios";
import CourseListItem from "./CourseListItem";
import PageLoader from "../../components/PageLoader";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import { LuCalendarPlus } from "react-icons/lu";

const CourseDetails = () => {
	const [recentCourses, setRecentCourses] = useState([]);
	const [loading, setLoading] = useState(true);
	const [enrolled, setEnrolled] = useState(false);
	const [seatLeft, setSeatLeft] = useState(0);
	const [loadingEnroll, setLoadingEnroll] = useState(false);

	const { user } = UseAuth();
	const result = useLoaderData();

	const {
		_id,
		title,
		price,
		duration,
		totalVideos,
		category,
		level,
		accessType,
		description,
		seats,
		image,
		createdAt,
		authorInfo,
	} = result.data;

	useTitle(`${title} | EduCore Learning Platform`);

	useEffect(() => {
		setSeatLeft(seats);
		axios
			.get(`${import.meta.env.VITE_apiUrl}/courses?filter=recent&limit=5`)
			.then((res) => {
				setRecentCourses(res.data);
				setLoading(false);
			})
			.catch(() => setLoading(false));
	}, [seats]);

	useEffect(() => {
		const fetchSeat = async () => {
			try {
				const res = await axios.get(`${import.meta.env.VITE_apiUrl}/courses/${_id}`);
				setSeatLeft(res.data.seats);
			} catch (err) {
				toast.error("Failed to fetch course seat info", err);
			}
		};

		if (!user || typeof user.getIdToken !== "function") {
			setEnrolled(false);
			fetchSeat();
			return;
		}

		const checkEnrollment = async () => {
			try {
				const token = await user.getIdToken();
				const res = await axios.get(`${import.meta.env.VITE_apiUrl}/is-enrolled`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
					params: {
						courseId: _id,
						email: user.email,
					},
				});
				setEnrolled(res.data.enrolled);
			} catch (err) {
				toast.error("Enrollment check failed:", err?.response?.data || err.message);
			}
		};

		checkEnrollment();
		fetchSeat();
	}, [user, _id]);

	const handleEnroll = async () => {
		if (!user || typeof user.getIdToken !== "function") {
			toast.error("User not authenticated yet");
			return;
		}

		if (loadingEnroll) return;
		setLoadingEnroll(true);

		try {
			const token = await user.getIdToken();
			const res = await axios.post(
				`${import.meta.env.VITE_apiUrl}/enroll`,
				{ courseId: _id, email: user.email },
				{
					headers: {
						Authorization: `Bearer ${token}`,
						"Content-Type": "application/json",
					},
				}
			);

			setEnrolled(res.data.enrolled);
			setSeatLeft(res.data.seatsLeft);
			toast.success(res.data.message);
		} catch (err) {
			toast.error(err?.response?.data?.message || "Something went wrong");
		} finally {
			setLoadingEnroll(false);
		}
	};

	if (loading) return <PageLoader />;
	return (
		<>
			<div className="bg-brand-blue py-10 lg:py-20 px-4">
				<div className="container mx-auto flex md:justify-between md:items-center flex-col md:flex-row gap-10">
					<div className="md:w-[562px]">
						<div className="flex text-yellow-400 gap-1 mb-6">
							{Array.from({ length: 5 }).map((_, idx) => (
								<FaStar key={idx} />
							))}
						</div>
						<h1 className="text-white font-semibold text-2xl lg:text-4xl/snug">{title}</h1>
						<div className="border-t border-[#8DBBE9]/50 mt-5 pt-5 lg:mt-12 lg:pt-12 flex gap-5 flex-col sm:flex-row">
							<div className="flex items-center gap-3 bg-white p-2 rounded-[35px] flex-1">
								<figure>
									<img
										src={authorInfo.photoURL}
										alt={authorInfo.displayName}
										className="w-16 h-16 rounded-full object-cover object-center"
									/>
								</figure>
								<div>
									<h5 className="text-brand-gray1 font-medium">Instructor</h5>
									<h4 className="font-semibold text-brand-black1">{authorInfo.displayName}</h4>
								</div>
							</div>
							<div className="flex flex-1 items-center gap-3 bg-white p-2 rounded-[35px]">
								<div className="w-16 h-16 flex items-center justify-center bg-brand-blue rounded-full text-white text-2xl">
									<FaRegBookmark />
								</div>
								<div>
									<h5 className="text-brand-gray1 font-medium">Category</h5>
									<h4 className="font-semibold text-brand-black1">{category}</h4>
								</div>
							</div>
						</div>
					</div>

					<div className="md:w-[306px] bg-white p-6 rounded-xl">
						<h3 className="text-2xl mb-3 font-semibold">Get the course</h3>
						<p className="text-xl font-semibold mb-5 text-brand-gray4">$ {price} USD</p>

						{!user ? (
							<button
								disabled
								className="bg-gray-300 text-gray-600 w-full p-3 rounded-md font-medium cursor-not-allowed"
							>
								Please login to enroll
							</button>
						) : seatLeft <= 0 ? (
							enrolled ? (
								<button
									onClick={handleEnroll}
									disabled={loadingEnroll}
									className={`bg-red-600 hover:bg-red-700 text-white w-full p-3 rounded-md font-medium transition delay-75 ${
										loadingEnroll ? "opacity-60 cursor-not-allowed" : ""
									}`}
								>
									{loadingEnroll ? "Processing..." : "Remove Enrollment"}
								</button>
							) : (
								<p className="text-red-600 font-medium text-center">No seats left</p>
							)
						) : (
							<button
								onClick={handleEnroll}
								disabled={loadingEnroll}
								className={`${
									enrolled ? "bg-green-600 hover:bg-green-700" : "bg-brand-blue hover:bg-blue-700"
								} text-white w-full p-3 rounded-md font-medium transition delay-75 ${
									loadingEnroll ? "opacity-60 cursor-not-allowed" : ""
								}`}
							>
								{loadingEnroll ? "Processing..." : enrolled ? "Enrolled" : "Enroll Now"}
							</button>
						)}

						<p className="text-center text-sm mt-2 text-gray-500">{seatLeft} seats left</p>

						<div className="space-y-3 mt-5 pt-5 border-t border-brand-black2/10">
							<div className="flex items-center gap-4">
								<div className="bg-brand-blue w-6 h-6 rounded-full text-white p-1 flex items-center justify-center">
									<FiBarChart size={14} />
								</div>
								<p>Level : {level}</p>
							</div>
							<div className="flex items-center gap-4">
								<div className="bg-brand-blue w-6 h-6 rounded-full text-white p-1 flex items-center justify-center">
									<AiFillClockCircle size={14} />
								</div>
								<p>Duration: {duration}</p>
							</div>
							<div className="flex items-center gap-4">
								<div className="bg-brand-blue w-6 h-6 rounded-full text-white p-1 flex items-center justify-center">
									<FaCirclePlay size={14} />
								</div>
								<p>Videos: {totalVideos}</p>
							</div>
							<div className="flex items-center gap-4">
								<div className="bg-brand-blue w-6 h-6 rounded-full text-white p-1 flex items-center justify-center">
									<FaMedal size={14} />
								</div>
								<p>{accessType}</p>
							</div>
							<div className="flex items-center gap-4">
								<div className="bg-brand-blue w-6 h-6 rounded-full text-white p-1 flex items-center justify-center">
									<LuCalendarPlus size={14} />
								</div>
								<p>{dayjs(createdAt).format("DD MMM YYYY, h:mm A")}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container mx-auto flex flex-col lg:flex-row lg:gap-25 gap-10 my-12 px-4">
				<div className="flex-2/3">
					<div className="mb-8">
						<button className="text-base bg-brand-blue text-white rounded-4xl border-0 font-medium py-2.5 px-8 hover:bg-blue-700 cursor-pointer">
							Overview
						</button>
					</div>
					<div>
						<figure className="mb-6">
							<img className="rounded-lg" src={image} alt={title} />
						</figure>
						<p className="text-brand-gray1 text-base/loose">{description}</p>
					</div>
				</div>
				<div className="flex-1/3">
					<h4 className="text-2xl font-medium mb-4 pb-3 border-b border-brand-gray4/10">Recent Courses</h4>
					<div className="flex flex-col gap-6">
						{recentCourses.map((item) => (
							<CourseListItem key={item._id} item={item}></CourseListItem>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default CourseDetails;
