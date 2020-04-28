import React, { useState } from "react";
import EmailInput from "../../Emailnput/EmailInput";

const SubscribeNewsLetter = () => {
	const [email, setEmail] = useState("");
	return (
		<div class="cta-sub text-center no-color">
			<div class="container">
				<h1 class="wow fadeInUp" data-wow-delay="0s">
					Want to Try Out Our Marketing Blue-Print?
				</h1>
				<p class="wow fadeInUp" data-wow-delay="0.2s">
					Just enter your email below, and start marketing.
				</p>
				<EmailInput className="mail" />
			</div>
		</div>
	);
};

export default SubscribeNewsLetter;
