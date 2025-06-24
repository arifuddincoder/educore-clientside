import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router";
import axios from "axios";
import UseAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { ImUserMinus } from "react-icons/im";

const MyEnrolledCoursesRow = ({ course, index, refetch }) => {
	const { _id, title, description } = course;

	const { user } = UseAuth();

	const handleRemove = async () => {
		const result = await Swal.fire({
			title: "Are you sure?",
			text: "You are about to remove your enrollment from this course.",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#d33",
			cancelButtonColor: "#3085d6",
			confirmButtonText: "Yes, remove it!",
		});

		if (!result.isConfirmed) return;

		try {
			const token = await user.getIdToken();
			await axios.post(
				`${import.meta.env.VITE_apiUrl}/enroll`,
				{ email: user.email, courseId: _id },
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			Swal.fire("Removed!", "Your enrollment has been removed.", "success");
			refetch();
		} catch (err) {
			Swal.fire("Error!", "Failed to remove enrollment", "error");
		}
	};

	return (
		<tr>
			<td>{index + 1}</td>
			<td>{title}</td>
			<td className="hidden md:table-cell">{description.split(" ").slice(0, 10).join(" ") + "..."}</td>
			<th>
				<div className="flex gap-3 flex-wrap">
					<Link
						to={`/course-details/${_id}`}
						className="text-lg rounded-sm text-white font-medium transition cursor-pointer bg-indigo-600 hover:bg-indigo-700 w-10 h-10 justify-center items-center flex"
					>
						<FaEye />
					</Link>
					<button
						onClick={handleRemove}
						className="text-sm rounded-sm text-white font-medium transition bg-red-600 hover:bg-red-700 px-4 py-2 hidden xl:inline-block"
					>
						Remove Enrollment
					</button>
					<button
						onClick={handleRemove}
						className="text-lg rounded-sm text-white font-medium transition bg-red-600 hover:bg-red-700 flex items-center justify-center xl:hidden w-10 h-10"
					>
						<ImUserMinus />
					</button>
				</div>
			</th>
		</tr>
	);
};

export default MyEnrolledCoursesRow;
