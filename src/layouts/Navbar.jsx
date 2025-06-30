import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/educore-logo.png";
import UseAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { PiUserCircleFill } from "react-icons/pi";
import { Tooltip } from "react-tooltip";
const Navbar = () => {
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// 80px এর বেশি স্ক্রল হলেই shadow লাগবে
			if (window.scrollY > 80) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const { user, signOutUser } = UseAuth();
	const handleLogout = () => {
		signOutUser()
			.then(() => {
				toast.success("You’re now logged out. See you again soon!");
			})
			.catch((error) => {
				toast(error);
			});
	};
	const navItems = (
		<>
			<li>
				<NavLink to="/" className="hover:text-black">
					Home
				</NavLink>
			</li>
			<li>
				<NavLink className="hover:text-black" to="/courses">
					Courses
				</NavLink>
			</li>
			{user ? (
				<>
					<li>
						<NavLink className="hover:text-black" to="/add-course">
							Add Course
						</NavLink>
					</li>
					<li>
						<NavLink className="hover:text-black" to="/manage-courses">
							Manage <span className="lg:hidden xl:inline-block">Courses</span>
						</NavLink>
					</li>
					<li>
						<NavLink className="hover:text-black" to="/my-courses">
							Enrolled <span className="lg:hidden xl:inline-block">Courses</span>
						</NavLink>
					</li>
					<li>
						<NavLink className="hover:text-black" to="/contact">
							Contact
						</NavLink>
					</li>
					<li className="sm:hidden">
						<button onClick={handleLogout}>Logout</button>
					</li>
				</>
			) : (
				<>
					<li>
						<NavLink className="hover:text-black" to="/about">
							About
						</NavLink>
					</li>
					<li>
						<NavLink className="hover:text-black" to="/how-it-works">
							How it Works
						</NavLink>
					</li>
					<li>
						<NavLink className="hover:text-black" to="/contact">
							Contact
						</NavLink>
					</li>
					<li className="sm:hidden">
						<NavLink to="/login">Login</NavLink>
					</li>
					<li className="sm:hidden">
						<NavLink to="/register">Register</NavLink>
					</li>
				</>
			)}
		</>
	);

	return (
		<div
			className={`sticky top-0 z-50 transition-all duration-300 py-3 ${
				isSticky
					? "bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200"
					: "bg-gradient-to-r from-white via-gray-50 to-white"
			}`}
		>
			<div className="navbar container mx-auto items-center flex">
				<div className="navbar-start sm:w-[40%] w-full">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{" "}
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
							</svg>
						</div>
						<ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
							{navItems}
						</ul>
					</div>
					<Link to="/">
						<img src={logoImg} alt="EduCare official logo" />
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu-horizontal text-base font-medium flex flex-wrap w-fit gap-10 text-neutral-400">
						{navItems}
					</ul>
				</div>
				<div className="navbar-end gap-3 hidden sm:flex">
					{user ? (
						<>
							<div className="mr-1 relative group  hidden sm:block">
								{user.photoURL ? (
									<img
										src={user.photoURL}
										alt="Profile photo"
										data-tooltip-id="user-tooltip"
										className="w-10 h-10 rounded-full object-cover  cursor-pointer"
									/>
								) : (
									<PiUserCircleFill
										size={41}
										className="cursor-pointer user-full-name"
										data-tooltip-id="user-tooltip"
									/>
								)}
								<Tooltip id="user-tooltip" place="bottom" className="z-10">
									{user?.displayName}
								</Tooltip>
							</div>
							<button
								onClick={handleLogout}
								className="text-base bg-brand-blue text-white rounded-4xl border-0 font-medium py-2.5 px-8 hover:bg-blue-700 cursor-pointer"
							>
								Logout
							</button>
						</>
					) : (
						<>
							<Link to="/login" className="text-base rounded-4xl border-0 font-medium py-2.5 px-4">
								Login
							</Link>
							<Link
								to="/register"
								className="text-base bg-brand-blue text-white rounded-4xl border-0 font-medium py-2.5 px-8 hover:bg-blue-700"
							>
								Register
							</Link>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
