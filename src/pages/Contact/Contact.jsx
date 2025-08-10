import React from "react";
import useTitle from "../../hooks/useTitle";

const Contact = () => {
	useTitle("Contact Us | EduCore Learning Platform");
	return (
		<>
			<div className="bg-brand-blue pt-12 pb-52 px-4">
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold text-white mb-2">Contact Us</h2>
				</div>
			</div>
			<div className="-mt-48 mb-10 lg:mb-20 px-4">
				<div className="container mx-auto bg-white rounded-2xl p-6 lg:p-8 shadow-lg shadow-brand-black1/10">
					<h3 className="text-xl font-semibold text-gray-700 mb-6 text-center">
						Need help or have a suggestion? Let us know.
					</h3>

					<form>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
							<input
								type="text"
								placeholder="Name*"
								className="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
								required
							/>

							<input
								type="email"
								placeholder="Email*"
								required
								className="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
							/>
						</div>
						<textarea
							rows="4"
							placeholder="Type your message"
							required
							className="w-full px-4 py-3 mb-4 bg-gray-50 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
						></textarea>

						<button
							type="submit"
							className="cursor-pointer bg-brand-blue text-white px-6 py-3 rounded-4xl font-semibold hover:bg-blue-700 transition"
						>
							Contact Us
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Contact;
