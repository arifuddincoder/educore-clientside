import React from "react";
import UseAuth from "../hooks/useAuth";
import { Outlet, useNavigation } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageLoader from "../components/PageLoader";

const RootLayout = () => {
	const { loading } = UseAuth();
	const navigation = useNavigation();
	const isLoading = navigation.state === "loading";
	if (loading || isLoading) {
		return <PageLoader />;
	}
	return (
		<>
			<Navbar></Navbar>
			<div className="min-h-[80]">
				<Outlet></Outlet>
			</div>
			<Footer></Footer>
		</>
	);
};

export default RootLayout;
