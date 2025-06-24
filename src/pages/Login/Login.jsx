import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import UseAuth from "../../hooks/useAuth";
import Lottie from "lottie-react";

import loginLottie from "../../assets/lottie/login-lottie.json";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";
import axios from "axios";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const { signInUserWithEmailPass, googleSignIn, setLoading, githubSignIn } = UseAuth();

	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || "/";

	const handleLogin = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;

		signInUserWithEmailPass(email, password)
			.then((result) => {
				const user = result.user;
				const lastSignInTime = user.metadata?.lastSignInTime;

				axios
					.post(`${import.meta.env.VITE_apiUrl}/users`, {
						email,
						lastSignInTime,
					})
					.then(() => {
						toast.success("Welcome back! You have successfully logged in.");
					})
					.catch((err) => {
						toast.error("Login successful, but failed to update DB.", err);
					});

				navigate(from, { replace: true });
			})
			.catch((error) => {
				if (error.code === "auth/wrong-password") {
					toast.error("Wrong password. Please try again.");
				} else {
					toast.error("Invalid email or password. Please try again.");
				}
			})
			.finally(() => setLoading(false));
	};

	const handleGoogleBtnLogin = () => {
		googleSignIn()
			.then((result) => {
				const user = result.user;
				const { creationTime, lastSignInTime } = user.metadata;

				const userProfile = {
					displayName: user.displayName,
					photoURL: user.photoURL,
					email: user.email,
					creationTime,
					lastSignInTime,
				};

				axios
					.post(`${import.meta.env.VITE_apiUrl}/users`, userProfile)
					.then((response) => {
						const data = response.data;

						if (data.status === "new") {
							toast.success("Account created successfully with Google! You're now logged in.");
						} else if (data.status === "existing") {
							toast.success("Welcome back! You've logged in with Google.");
						}

						navigate(from, { replace: true });
					})
					.catch((error) => {
						toast.error("User info save failed in database.", error);
					});
			})
			.catch((error) => {
				const errorMessage = error.message;
				toast.error(errorMessage);
			});
	};

	const handleGithubBtnLogin = async () => {
		try {
			const result = await githubSignIn();
			const user = result.user;
			const { creationTime, lastSignInTime } = user.metadata;

			const response = await axios.post(`${import.meta.env.VITE_apiUrl}/users`, {
				email: user.email,
				displayName: user.displayName,
				photoURL: user.photoURL,
				creationTime,
				lastSignInTime,
			});

			const data = response.data;

			if (data.status === "new") {
				toast.success("Account created successfully with Github!");
			} else {
				toast.success("Welcome back! You've logged in with Github.");
			}

			navigate(from || "/", { replace: true });
		} catch (error) {
			if (error.code === "auth/account-exists-with-different-credential") {
				toast.error("This email is already registered with another provider (e.g. Google). Please login with that.");

				setTimeout(() => {
					window.location.reload();
				}, 1500);
			} else {
				toast.error(error.message || "Github sign-in failed.");
			}
		}
	};

	useTitle("Login | EduCore Learning Platform");

	return (
		<>
			<div className="bg-brand-blue pt-12 pb-52 px-4">
				<div className="container mx-auto">
					<h1 className="text-3xl font-bold text-white mb-2">Login</h1>
				</div>
			</div>
			<div className="-mt-48 mb-10 lg:mb-20 px-4">
				<div className="container mx-auto bg-white rounded-2xl p-6 shadow-lg shadow-brand-black1/10">
					<div className="flex">
						<div className="w-full md:w-1/2 flex flex-col justify-center p-2 sm:p-8 lg:p-15">
							<h2 className="text-3xl font-semibold text-gray-700 mb-1">Welcome Back</h2>
							<h3 className="text-brand-gray1 mb-6">Please enter your details.</h3>
							<div>
								<button
									onClick={handleGoogleBtnLogin}
									className="btn min-h-12 bg-white text-primary border-[#e5e5e5] w-full rounded-lg mb-3"
								>
									<svg
										aria-label="Google logo"
										width="20"
										height="20"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
									>
										<g>
											<path d="m0 0H512V512H0" fill="#fff"></path>
											<path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
											<path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
											<path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
											<path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
										</g>
									</svg>
									Login with Google
								</button>
								<button
									onClick={handleGithubBtnLogin}
									className="btn w-full min-h-12 bg-black text-white border-black rounded-lg"
								>
									<svg
										aria-label="GitHub logo"
										width="16"
										height="16"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
									>
										<path
											fill="white"
											d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
										></path>
									</svg>
									Login with GitHub
								</button>
							</div>
							<div className="flex items-center gap-4 my-6">
								<hr className="flex-grow border-t border-gray-300" />
								<span className="text-gray-500 text-sm font-medium">Or</span>
								<hr className="flex-grow border-t border-gray-300" />
							</div>
							<form onSubmit={handleLogin}>
								<input
									type="email"
									name="email"
									className="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
									placeholder="Enter your email address"
								/>
								<div className="relative mb-4">
									<input
										type={showPassword ? "text" : "password"}
										name="password"
										className="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
										placeholder="Enter your password"
										autoComplete="autocomplete"
									/>
									<span
										onClick={() => setShowPassword(!showPassword)}
										className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
									>
										{showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
									</span>
								</div>
								<button
									type="submit"
									className="bg-brand-blue text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition w-full cursor-pointer"
								>
									Login
								</button>
							</form>

							<p className="mt-6 text-sm text-center">
								Don’t have an account?{" "}
								<Link to="/register" className="hover:link" state={{ from: location.state?.from || { pathname: "/" } }}>
									Register for free
								</Link>
							</p>
						</div>

						<div className="hidden md:flex w-1/2 items-center justify-center">
							<Lottie animationData={loginLottie} loop={true} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
