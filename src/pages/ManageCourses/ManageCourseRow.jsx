import React from "react";
import { FaEye, FaTrashRestoreAlt } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router";

const ManageCourseRow = ({ course, index, handleDeleteCourse }) => {
	const { _id, title, description, authorEmail } = course;
	return (
		<tr>
			<td>{index + 1}</td>
			<td>{title}</td>
			<td className="hidden md:table-cell">{description.split(" ").slice(0, 10).join(" ") + "..."}</td>
			<td>
				<div className="flex gap-3 flex-wrap">
					<Link
						to={`/course-details/${_id}`}
						className="text-lg rounded-sm text-white font-medium transition cursor-pointer bg-indigo-600 hover:bg-indigo-700  p-3"
					>
						<FaEye />
					</Link>
					<Link
						to={`/edit-course/${_id}`}
						className="bg-slate-200 hover:bg-slate-300 text-slate-700 p-3 rounded-md cursor-pointer"
					>
						<FaPencil />
					</Link>
					<button
						onClick={() => handleDeleteCourse(_id, authorEmail)}
						className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-md cursor-pointer"
					>
						<FaTrashRestoreAlt />
					</button>
				</div>
			</td>
		</tr>
	);
};

export default ManageCourseRow;
