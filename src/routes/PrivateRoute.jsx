import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router";
import PageLoader from "../components/PageLoader";
import UseAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
	const { user, loading } = UseAuth();
	const location = useLocation();
	const [showToast, setShowToast] = useState(false);

	useEffect(() => {
		if (!loading && !user && !showToast) {
			toast.error("You must be logged in to see the content.");
			setShowToast(true);
		}
	}, [loading, user, showToast]);

	if (loading) {
		return <PageLoader />;
	}

	if (user && user?.email) {
		return children;
	}

	return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
