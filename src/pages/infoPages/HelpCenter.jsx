import React from "react";
import useTitle from "../../hooks/useTitle";

const HelpCenter = () => {
	useTitle("Help Center | EduCore Learning Platform");
	return (
		<>
			<div className="bg-brand-blue py-12 px-4">
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold text-white mb-2">Help Center</h2>
				</div>
			</div>

			<div className="xl:py-15 py-10 px-4">
				<div className="container mx-auto bg-white rounded-2xl space-y-6 text-gray-700 text-base leading-relaxed">
					<p>
						Welcome to the <strong>EduCore Help Center</strong>. We're here to assist you with any questions, technical
						issues, or guidance you may need while using our platform. Below you'll find answers to common queries and
						directions to get support quickly.
					</p>

					<p>Here are some of the frequently asked topics we can help you with:</p>

					<ul className="list-disc list-inside space-y-1">
						<li>
							<strong>Account Issues:</strong> Trouble logging in, resetting password, or updating your profile
							information.
						</li>
						<li>
							<strong>Course Access:</strong> Can't find your enrolled courses, or facing issues with course videos or
							materials.
						</li>
						<li>
							<strong>Enrollment & Payment:</strong> Questions about how to enroll, payment methods, or transaction
							failures.
						</li>
						<li>
							<strong>Certificates:</strong> Didn't receive your certificate after course completion? Let us help.
						</li>
						<li>
							<strong>Technical Support:</strong> Site loading issues, broken links, or bugs in the platform.
						</li>
					</ul>

					<p>
						If you don’t find your answer here, feel free to reach out directly. Our support team is available to assist
						you 24/7.
					</p>

					<p>
						📧 Email us at <strong>support@educore.com</strong>
						<br />
						📞 Call us at <strong>+880-1234-567890</strong>
						<br />
						💬 Or chat with us using the live support button at the bottom right corner of your screen.
					</p>

					<p>Thank you for learning with EduCore. Your success is our priority, and we're always here to help.</p>
				</div>
			</div>
		</>
	);
};

export default HelpCenter;
