import React from "react";
import logoImg from "../assets/educore-logo.png";
import { Link } from "react-router";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
	return (
		<div className="bg-brand-gray3 py-10 lg:py-24 px-4">
			<div className="container rounded-3xl mx-auto bg-linear-to-br from-[#A6CF4A] to-[#98BE41] text-center p-7 lg:py-12">
				<h3 className="font-semibold text-2xl lg:text-4xl text-white mb-3">Subscribe Newsletters</h3>
				<p className="text-white mb-8">Enter your email address to register to our newsletter</p>
				<form className="flex gap-4 sm:gap-0 flex-col sm:flex-row items-center justify-center max-w-96 mx-auto">
					<input type="text" placeholder="Your email" className="w-full bg-white rounded-[42px] py-3 pl-5 flex-3/4" />
					<button
						type="submit"
						className="w-full sm:flex-1/4 bg-brand-blue
					 text-white p-3 rounded-[42px] sm:-ml-10 cursor-pointer hover:bg-blue-700 delay-75 transition"
					>
						Sign up
					</button>
				</form>
			</div>
			<div className="container mx-auto flex justify-between gap-10 mt-12 lg:mt-25 flex-col md:flex-row">
				<div className="md:flex-6/12">
					<img src={logoImg} alt="Educore Official logo" />
					<p className="mt-5 text-brand-gray5 md:mr-12 mb-5">
						EduCore is a modern online learning platform offering top-notch courses, expert instructors, and flexible
						learning experiences to help you grow your career from anywhere.
					</p>
					<ul className="flex gap-2 sm:gap-3 flex-wrap text-brand-black2/50">
						<li className="bg-brand-gray6 p-3 rounded-sm">
							<Link to="https://www.facebook.com/arifuddincoder" target="_blank">
								<FaFacebookF size={15} />
							</Link>
						</li>
						<li className="bg-brand-gray6 p-3 rounded-sm">
							<Link to="https://x.com/arifuddincoder" target="_blank">
								<FaXTwitter size={15} />
							</Link>
						</li>
						<li className="bg-brand-gray6 p-3 rounded-sm">
							<Link to="https://www.linkedin.com/in/arifuddincoder/" target="_blank">
								<FaLinkedinIn size={15} />
							</Link>
						</li>
					</ul>
				</div>
				<div className="md:flex-6/12 flex flex-col sm:flex-row gap-10 md:gap-0">
					<div className="flex-1">
						<h3 className="text-brand-black1 font-medium mb-5">Quick Links</h3>
						<ul className="text-brand-gray5 space-y-3 footer-links">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/courses">All Courses</Link>
							</li>
							<li>
								<Link to="/about">About EduCore</Link>
							</li>
							<li>
								<Link to="/how-it-works">How It Works</Link>
							</li>
						</ul>
					</div>
					<div className="flex-1">
						<h3 className="text-brand-black1 font-medium mb-5">Support & Info</h3>
						<ul className="text-brand-gray5 space-y-3 footer-links">
							<li>
								<Link to="/help-center">Help Center</Link>
							</li>
							<li>
								<Link to="faq">FAQs</Link>
							</li>
							<li>
								<Link to="/contact">Contact Us</Link>
							</li>
							<li>
								<Link to="/terms-conditions">Terms & Conditions</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
