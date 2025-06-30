import React from "react";
import useTitle from "../../hooks/useTitle";

const Faqs = () => {
	useTitle("FAQs | EduCore Learning Platform");
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
						Find answers to some of the most frequently asked questions about using <strong>EduCore</strong>. Whether
						you're a new learner or returning student, we've got you covered.
					</p>

					<ul className="list-disc list-inside space-y-4">
						<li>
							<strong>1. How do I enroll in a course?</strong>
							<br />
							Simply browse our course catalog, click on the course you're interested in, and press the "Enroll" button.
							You may need to log in or create an account if you haven't already.
						</li>

						<li>
							<strong>2. Are the courses self-paced?</strong>
							<br />
							Yes! All EduCore courses are self-paced, allowing you to learn whenever and wherever it's convenient for
							you.
						</li>

						<li>
							<strong>3. Do I get a certificate after completing a course?</strong>
							<br />
							Absolutely. After successfully completing all lessons and assessments in a course, you’ll receive a
							downloadable certificate of completion.
						</li>

						<li>
							<strong>4. Can I access the course content after finishing it?</strong>
							<br />
							Yes, you’ll have lifetime access to all the courses you’ve enrolled in. You can revisit any lecture or
							material anytime.
						</li>

						<li>
							<strong>5. What payment methods do you accept?</strong>
							<br />
							We accept major credit/debit cards and secure digital payment options. All transactions are protected and
							encrypted.
						</li>

						<li>
							<strong>6. I'm facing issues accessing a video or course page. What should I do?</strong>
							<br />
							First, try refreshing the page or checking your internet connection. If the problem persists, reach out to
							our support team at <strong>support@educore.com</strong>.
						</li>

						<li>
							<strong>7. Is there any refund policy?</strong>
							<br />
							Yes, if you're not satisfied within the first 7 days of your enrollment and haven’t completed more than
							20% of the course, you can request a full refund.
						</li>
					</ul>

					<p>Still have questions? Our support team is here to help you anytime. Just email us or start a live chat.</p>
				</div>
			</div>
		</>
	);
};

export default Faqs;
