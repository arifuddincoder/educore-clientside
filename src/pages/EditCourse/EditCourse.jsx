import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import UseAuth from "../../hooks/useAuth";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import PageLoader from "../../components/PageLoader";
import toast from "react-hot-toast";

const categories = ["Computer Science", "Design", "Mathematics", "Language", "Marketing", "Programming"];
const levels = ["Beginner", "Intermediate", "Advanced"];
const accessTypes = ["Lifetime Access", "1 Year Access", "Limited Access"];

const EditCourse = () => {
	const { user } = UseAuth();
	const { id } = useParams();
	const navigate = useNavigate();
	const [courseData, setCourseData] = useState(null);
	useTitle(`Edit Course | EduCore Learning Platform`);
	useEffect(() => {
		const fetchCourse = async () => {
			try {
				const token = await user.getIdToken();
				const res = await axios.get(`${import.meta.env.VITE_apiUrl}/edit-course/${id}`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
					params: {
						email: user.email,
					},
				});

				if (res.data.authorEmail !== user.email) {
					toast.error("You are not authorized to edit this course");
					navigate("/manage-courses", { replace: true });
					return;
				}

				setCourseData(res.data);
			} catch (error) {
				toast.error("Failed to fetch course data", error);
				navigate("/manage-courses", { replace: true });
			}
		};

		if (user) {
			fetchCourse();
		}
	}, [id, user, navigate]);

	if (!courseData) return <PageLoader />;

	const {
		_id,
		title,
		price,
		duration,
		totalVideos,
		totalLessons,
		category,
		level,
		accessType,
		description,
		seats,
		image,
	} = courseData;

	const handleUpdateCourse = async (e) => {
		e.preventDefault();
		const form = e.target;

		const updatedCourse = {
			title: form.title.value.trim(),
			price: form.price.value.trim(),
			duration: form.duration.value.trim(),
			totalVideos: form.totalVideos.value.trim(),
			totalLessons: form.totalLessons.value.trim(),
			image: form.image.value.trim(),
			seats: parseInt(form.seats.value.trim()),
			category: form.category.value.trim(),
			level: form.level.value.trim(),
			accessType: form.accessType.value.trim(),
			description: form.description.value.trim(),
			updatedAt: new Date().toISOString(),
		};

		const emptyField = Object.entries(updatedCourse).find(([key, value]) => value === "");
		if (emptyField) {
			const [fieldName] = emptyField;
			return toast.error(`Please fill the ${fieldName} field.`);
		}

		try {
			const token = await user.getIdToken();

			await axios.patch(`${import.meta.env.VITE_apiUrl}/edit-course/${id}`, updatedCourse, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
				params: {
					email: user.email,
				},
			});

			toast.success("Course updated successfully!");
		} catch (error) {
			toast.error("Failed to update course.", error);
		}
	};

	return (
		<>
			<div className="bg-brand-blue pt-12 pb-52 px-4">
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold text-white mb-2">Edit Course Details</h2>
				</div>
			</div>
			<div className="-mt-48 mb-10 lg:mb-20 px-4">
				<div className="container mx-auto bg-white rounded-2xl p-6 lg:p-8 shadow-lg shadow-brand-black1/10">
					<h3 className="text-xl font-semibold text-gray-700 mb-6 text-center">
						Update the necessary fields below and save your changes
					</h3>

					<form onSubmit={handleUpdateCourse}>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
							<input
								name="title"
								type="text"
								defaultValue={title}
								placeholder="Course Title *"
								className="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
								required
							/>
							<input
								name="price"
								type="number"
								defaultValue={price}
								placeholder="Price (USD) *"
								className="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
								required
							/>
							<input
								name="duration"
								type="text"
								defaultValue={duration}
								placeholder="Duration (e.g., 6h 30min)"
								className="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
							/>
							<input
								name="totalVideos"
								type="number"
								defaultValue={totalVideos}
								placeholder="Total Videos *"
								className="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
							/>
							<input
								name="totalLessons"
								type="number"
								defaultValue={totalLessons}
								placeholder="Total Lessons *"
								className="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
							/>
							<input
								name="image"
								type="url"
								defaultValue={image}
								placeholder="Image URL *"
								className="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
								required
							/>
							<input
								name="seats"
								type="number"
								defaultValue={seats}
								placeholder="Enter total number of seats"
								className="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
								required
							/>
							<select
								name="category"
								required
								defaultValue={category}
								className="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
							>
								<option value="" disabled>
									Select Category *
								</option>
								{categories.map((item, idx) => (
									<option key={idx} value={item}>
										{item}
									</option>
								))}
							</select>
							<select
								name="level"
								required
								defaultValue={level}
								className="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
							>
								<option value="" disabled>
									Select Level *
								</option>
								{levels.map((item, idx) => (
									<option key={idx} value={item}>
										{item}
									</option>
								))}
							</select>
							<select
								name="accessType"
								required
								defaultValue={accessType}
								className="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
							>
								<option value="" disabled>
									Select Access Type *
								</option>
								{accessTypes.map((item, idx) => (
									<option key={idx} value={item}>
										{item}
									</option>
								))}
							</select>
						</div>
						<textarea
							name="description"
							rows="4"
							defaultValue={description}
							placeholder="Course Description *"
							required
							className="w-full px-4 py-3 mb-4 bg-gray-50 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
						></textarea>
						<button
							type="submit"
							className="bg-brand-blue text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
						>
							Update Course
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default EditCourse;
