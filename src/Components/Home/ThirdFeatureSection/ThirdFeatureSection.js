import React, { useState } from "react";
import EmailInput from "../../Emailnput/EmailInput";

const ThirdFeatureSection = () => {
	const [email, setEmail] = useState("");
	return (
		<div class="features-section">
			<div class="f-left">
				<div class="left-content wow fadeInLeft" data-wow-delay="0s">
					<h2 class="wow fadeInLeft" data-wow-delay="0.1s">
						Custom developed marketing plan, just for you.
					</h2>
					<p class="wow fadeInLeft" data-wow-delay="0.2s">
						You have big goals, and how are we supposed to plan for those goals
						without doing a one-on-one consultation? That is how we start it all
						off. Get what we use for our walk through.
					</p>
					<div class="subscribe-form wow zoomIn">
						<EmailInput className="mail-1" />
					</div>
				</div>
			</div>
			<div class="f-right"></div>
		</div>
	);
};

export default ThirdFeatureSection;
