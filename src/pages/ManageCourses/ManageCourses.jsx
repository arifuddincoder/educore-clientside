import React, { useCallback, useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import UseAuth from "../../hooks/useAuth";
import { fetchMyCourses } from "../../api/myCourses";
import toast from "react-hot-toast";
import PageLoader from "../../components/PageLoader";
import ManageCourseRow from "./ManageCourseRow";
import Swal from "sweetalert2";
import axios from "axios";

const ManageCourses = () => {
	const { user } = UseAuth();
	const [myCourses, setMyCourses] = useState([]);
	const [loading, setLoading] = useState(true);

	useTitle("Manage Courses | EduCore Learning Platform");

	const loadCourses = useCallback(async () => {
		try {
			const courses = await fetchMyCourses(user.email);
			setMyCourses(courses);
		} catch {
			toast.error("Failed to load your courses");
		} finally {
			setLoading(false);
		}
	}, [user.email]);

	useEffect(() => {
		if (!user?.email) return;
		loadCourses();
	}, [user?.email, loadCourses]);

	if (loading) return <PageLoader />;

	const handleDeleteCourse = async (id, email) => {
		const confirm = await Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		});

		if (!confirm.isConfirmed) return;

		try {
			const token = await user.getIdToken();

			await axios.delete(`${import.meta.env.VITE_apiUrl}/delete-course/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
				params: {
					email: email,
				},
			});

			Swal.fire("Deleted!", "Your course has been deleted.", "success");
			await loadCourses();
		} catch (error) {
			Swal.fire("Error", "Failed to delete the course.", "error");
		}
	};
	return (
		<>
			<div className="bg-brand-blue pt-12 pb-52 px-4">
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold text-white mb-2">Manage Your Courses</h2>
				</div>
			</div>
			<div className="-mt-48 mb-10 lg:mb-20 px-4 ">
				<div className="container mx-auto bg-white rounded-2xl p-6 lg:p-8 shadow-lg shadow-brand-black1/10">
					<h3 className="text-xl font-semibold text-gray-700 mb-6 text-center">
						View, edit, or remove the courses you have added
					</h3>
					<div className="overflow-x-auto bg-white">
						<table className="table">
							<thead>
								<tr>
									<th>No.</th>
									<th>Title</th>
									<th className="hidden md:block">Description</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{myCourses.length === 0 ? (
									<tr>
										<td colSpan="4" className="text-center text-gray-500 py-6">
											You haven't added any courses yet.
										</td>
									</tr>
								) : (
									myCourses.map((course, index) => (
										<ManageCourseRow
											key={course._id}
											course={course}
											index={index}
											handleDeleteCourse={handleDeleteCourse}
										/>
									))
								)}
							</tbody>
							<tfoot>
								<tr>
									<th>No.</th>
									<th>Title</th>
									<th className="hidden md:block">Description</th>
									<th>Actions</th>
								</tr>
							</tfoot>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};

export default ManageCourses;
