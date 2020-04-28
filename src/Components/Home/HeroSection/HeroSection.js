import React, { useState, useEffect } from "react";
import EmailSubmitButton from "../../EmailSubmitButton/EmailSubmitButton";
import EmailInput from "../../Emailnput/EmailInput";
import vailidator from "email-validator";

const HeroSection = () => {
	return (
		<div class="hero-section app-hero">
			<div class="container">
				<div class="hero-content app-hero-content text-center">
					<div class="col-md-10 col-md-offset-1 nopadding">
						<h1 class="wow fadeInUp" data-wow-delay="0s">
							Ossa, Take Your Marketing To The Future.
						</h1>
						<p class="wow fadeInUp" data-wow-delay="0.2s">
							Having trouble with marketing? The fact that you are reading this
							shows we are good at what we do. Get the marketing blue-print that
							we use in our one-on-one consultations.
							<br class="hidden-xs" />
						</p>

						<EmailInput className="mail" />

						{/* </form> */}

						{/* <a
					class="btn btn-primary btn-action popup wow fadeInUp"
					data-wow-delay="0.2s"
					href="https://www.youtube.com/watch?v=6NC_ODHu5jg"
				>
					Watch Intro
				</a> */}
					</div>
					<div class="col-md-12">
						<div class="hero-image">
							<img
								class="img-responsive"
								src="assets/images/app_hero_1.png"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
