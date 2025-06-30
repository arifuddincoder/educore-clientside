import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import AddCourse from "../pages/AddCourse/AddCourse";
import EditCourse from "../pages/EditCourse/EditCourse";
import ManageCourses from "../pages/ManageCourses/ManageCourses";
import MyEnrolledCourses from "../pages/MyEnrolledCourses/MyEnrolledCourses";
import PrivateRoute from "./PrivateRoute";
import Contact from "../pages/Contact/Contact";
import Courses from "../pages/Courses/Courses";
import axios from "axios";
import PageLoader from "../components/PageLoader";
import About from "../pages/infoPages/About";
import HowItWorks from "../pages/infoPages/HowItWorks";
import HelpCenter from "../pages/infoPages/HelpCenter";
import Faqs from "../pages/infoPages/Faqs";
import TermsAndConditions from "../pages/infoPages/TermsAndConditions";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		errorElement: <NotFound></NotFound>,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "/courses",
				Component: Courses,
				loader: () => axios(`${import.meta.env.VITE_apiUrl}/courses?filter=recent`),
				hydrateFallbackElement: <PageLoader />,
			},
			{
				path: "/add-course",
				element: (
					<PrivateRoute>
						<AddCourse></AddCourse>
					</PrivateRoute>
				),
			},
			{
				path: "/edit-course/:id",
				element: (
					<PrivateRoute>
						<EditCourse></EditCourse>
					</PrivateRoute>
				),
			},

			{
				path: "/course-details/:id",
				Component: CourseDetails,
				loader: ({ params }) => axios(`${import.meta.env.VITE_apiUrl}/courses/${params.id}`),
				hydrateFallbackElement: <PageLoader />,
			},
			{
				path: "/manage-courses",
				element: (
					<PrivateRoute>
						<ManageCourses></ManageCourses>
					</PrivateRoute>
				),
			},
			{
				path: "/my-courses",
				element: (
					<PrivateRoute>
						<MyEnrolledCourses></MyEnrolledCourses>
					</PrivateRoute>
				),
			},
			{
				path: "/contact",
				Component: Contact,
			},
			{
				path: "/about",
				Component: About,
			},
			{
				path: "/how-it-works",
				Component: HowItWorks,
			},
			{
				path: "/help-center",
				Component: HelpCenter,
			},
			{
				path: "/faq",
				Component: Faqs,
			},
			{
				path: "/terms-conditions",
				Component: TermsAndConditions,
			},
			{
				path: "/login",
				Component: Login,
			},
			{
				path: "/register",
				Component: Register,
			},
			{
				path: "/about",
				Component: Register,
			},
		],
	},
]);
