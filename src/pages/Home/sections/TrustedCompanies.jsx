import React from "react";
import googleLogo from "../../../assets/trusted-companies/google.png";
import slackLogo from "../../../assets/trusted-companies/slack.png";
import amazonLogo from "../../../assets/trusted-companies/amazon.png";
import hubspotLogo from "../../../assets/trusted-companies/hubspot.png";
import gustoLogo from "../../../assets/trusted-companies/gusto.png";
const TrustedCompanies = () => {
	return (
		<div className="max-w-[852px] mx-auto flex lg:justify-between justify-center items-center flex-wrap gap-x-8 gap-y-6 py-12 lg:py-20 px-4">
			<figure>
				<img src={googleLogo} alt="Google" />
			</figure>
			<figure>
				<img src={slackLogo} alt="Google" />
			</figure>
			<figure>
				<img src={amazonLogo} alt="Google" />
			</figure>
			<figure>
				<img src={hubspotLogo} alt="Google" />
			</figure>
			<figure>
				<img src={gustoLogo} alt="Google" />
			</figure>
		</div>
	);
};

export default TrustedCompanies;
