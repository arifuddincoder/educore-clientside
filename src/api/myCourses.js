import axios from "axios";
import { getAuth } from "firebase/auth";
import toast from "react-hot-toast";

const auth = getAuth();

export const fetchMyCourses = async (email) => {
	try {
		const token = await auth.currentUser.getIdToken();
		const res = await axios.get(`${import.meta.env.VITE_apiUrl}/my-courses?filter=recent`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			params: { email },
		});
		return res.data;
	} catch (error) {
		toast.error(error?.response?.data?.message || "Something went wrong!");
		throw error;
	}
};
