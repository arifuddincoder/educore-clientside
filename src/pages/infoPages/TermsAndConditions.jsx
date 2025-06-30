import React from "react";
import useTitle from "../../hooks/useTitle";

const TermsAndConditions = () => {
	useTitle("Terms and Conditions | EduCore Learning Platform");
	return (
		<>
			<div className="bg-brand-blue py-12 px-4">
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold text-white mb-2">FAQs</h2>
				</div>
			</div>

			<div className="xl:py-15 py-10 px-4">
				<div className="container mx-auto bg-white rounded-2xl space-y-6 text-gray-700 text-base leading-relaxed">
					<p>
						Welcome to <strong>EduCore</strong>. By accessing or using our website and services, you agree to be bound
						by the following terms and conditions. Please read them carefully before using the platform.
					</p>

					<p>
						<strong>1. Use of Platform</strong>
					</p>
					<p>
						EduCore provides online educational content for personal and non-commercial use only. You agree not to
						misuse our services or attempt to access restricted areas of the platform without authorization.
					</p>

					<p>
						<strong>2. User Accounts</strong>
					</p>
					<p>
						You are responsible for maintaining the confidentiality of your account credentials. You agree to provide
						accurate information during registration and keep your profile updated.
					</p>

					<p>
						<strong>3. Enrollment & Payments</strong>
					</p>
					<p>
						When you enroll in a course, you agree to pay the applicable fees. All payments are processed securely.
						EduCore reserves the right to change course pricing at any time.
					</p>

					<p>
						<strong>4. Refund Policy</strong>
					</p>
					<p>
						Refunds may be issued within 7 days of purchase if the course progress is less than 20%. No refunds will be
						provided after certificate issuance or significant course completion.
					</p>

					<p>
						<strong>5. Intellectual Property</strong>
					</p>
					<p>
						All content on EduCore, including videos, text, graphics, and logos, are the intellectual property of
						EduCore or its instructors. You may not copy, redistribute, or republish content without permission.
					</p>

					<p>
						<strong>6. Code of Conduct</strong>
					</p>
					<ul className="list-disc list-inside space-y-1">
						<li>Respect fellow learners and instructors.</li>
						<li>Do not post offensive, harmful, or irrelevant content.</li>
						<li>Use the platform ethically and honestly.</li>
					</ul>

					<p>
						<strong>7. Termination</strong>
					</p>
					<p>
						EduCore reserves the right to suspend or terminate your account if you violate these terms, misuse the
						platform, or engage in fraudulent activity.
					</p>

					<p>
						<strong>8. Changes to Terms</strong>
					</p>
					<p>
						We may update these terms from time to time. Continued use of the platform after changes implies your
						acceptance of the revised terms.
					</p>

					<p>
						<strong>9. Contact</strong>
					</p>
					<p>
						For any questions regarding these terms, please contact us at <strong>support@educore.com</strong>.
					</p>

					<p>
						Thank you for using EduCore. Your trust and compliance help us maintain a safe and effective learning
						environment for everyone.
					</p>
				</div>
			</div>
		</>
	);
};

export default TermsAndConditions;
