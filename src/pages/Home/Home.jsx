import React, { useEffect, useState } from "react";
import BannerSection from "./sections/BannerSection";
import TrustedCompanies from "./sections/TrustedCompanies";
import LatestCourses from "./sections/LatestCourses";
import WhyLearnWithUs from "./sections/WhyLearnWithUs";
import PopularCourses from "./sections/PopularCourses";
import FeaturedCategories from "./sections/FeaturedCategories";
import TestimonialCarousel from "./sections/TestimonialCarousel";
import useTitle from "../../hooks/useTitle";
import axios from "axios";
import PageLoader from "../../components/PageLoader";
import toast from "react-hot-toast";

const Home = () => {
	useTitle("EduCore - Enroll & Learn with Confidence");

	const [latestCourses, setLatestCourses] = useState([]);
	const [popularCourses, setPopularCourses] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCourses = async () => {
			try {
				setLoading(true);
				const [latestRes, popularRes] = await Promise.all([
					axios.get(`${import.meta.env.VITE_apiUrl}/courses?filter=recent&limit=6`),
					axios.get(`${import.meta.env.VITE_apiUrl}/courses?filter=popular&limit=6`),
				]);
				setLatestCourses(latestRes.data);
				setPopularCourses(popularRes.data);
			} catch (error) {
				toast.error("Error fetching courses:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchCourses();
	}, []);

	if (loading) {
		return <PageLoader />;
	}

	return (
		<>
			<BannerSection></BannerSection>
			<TrustedCompanies></TrustedCompanies>
			<LatestCourses latestCourses={latestCourses}></LatestCourses>
			<WhyLearnWithUs></WhyLearnWithUs>
			<PopularCourses popularCourses={popularCourses}></PopularCourses>
			<FeaturedCategories></FeaturedCategories>
			<TestimonialCarousel></TestimonialCarousel>
		</>
	);
};

export default Home;
