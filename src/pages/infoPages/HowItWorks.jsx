import React from "react";
import useTitle from "../../hooks/useTitle";

const HowItWorks = () => {
	useTitle("How It Works | EduCore Learning Platform");
	return (
		<>
			<div className="bg-brand-blue py-12 px-4">
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold text-white mb-2">How EduCore Works</h2>
				</div>
			</div>

			<div className="xl:py-15 py-10 px-4">
				<div className="container mx-auto bg-white rounded-2xl space-y-6 text-gray-700 text-base leading-relaxed">
					<p>
						Getting started with <strong>EduCore</strong> is simple, intuitive, and designed for learners of all levels.
						Our platform ensures that you can start learning in just a few steps without any hassle.
					</p>

					<p>
						Whether you're here to build a new skill or grow your professional expertise, EduCore makes the process
						streamlined and effective. Here's how it works:
					</p>

					<ul className="list-disc list-inside space-y-1">
						<li>
							<strong>1. Explore Courses:</strong> Browse through our wide range of courses categorized by skill level,
							industry, and topics.
						</li>
						<li>
							<strong>2. Enroll Easily:</strong> Select your desired course and enroll instantly with a single click —
							no complex process or prerequisites.
						</li>
						<li>
							<strong>3. Learn at Your Own Pace:</strong> Access course materials anytime, anywhere. Watch video
							lessons, read resources, and complete assignments at your convenience.
						</li>
						<li>
							<strong>4. Practice Through Projects:</strong> Apply your knowledge with hands-on projects and build a
							portfolio you can showcase.
						</li>
						<li>
							<strong>5. Get Certified:</strong> After completing a course, receive a digital certificate that validates
							your new skills.
						</li>
					</ul>

					<p>
						EduCore is committed to offering a smooth and flexible learning experience for everyone. With responsive
						design and lifetime access, you’re always in control of your learning journey.
					</p>

					<p>
						Ready to begin? Start exploring courses today and take your first step toward a brighter, more skilled
						future with EduCore.
					</p>
				</div>
			</div>
		</>
	);
};

export default HowItWorks;
