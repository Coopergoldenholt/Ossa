import React from "react";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import WebIcon from "@material-ui/icons/Web";
import SearchIcon from "@material-ui/icons/Search";

const Services = () => {
	return (
		<div class="services-section text-center" id="services">
			{/* <!-- Services section (small) with icons --> */}
			<div class="container">
				<div class="col-md-8 col-md-offset-2 nopadding">
					<div class="services-content">
						<h1 class="wow fadeInUp" data-wow-delay="0s">
							Ossa isn't your Grandpa's marketing agency.
						</h1>
						<p class="wow fadeInUp" data-wow-delay="0.2s">
							Ossa is known as the goddess of fame. What a perfect name for a
							compnay thats sole focus is building your online footprint. We
							handle everything thats online. Website Creation, Social Media
							Posts, Online Adds, Content Creation, and more. Not to mention our
							one on one development of a marketing mix. You are going to love
							being a part of Ossa.
						</p>
					</div>
				</div>
				<div class="col-md-12 text-center">
					<div class="services">
						<div class="col-sm-4 wow fadeInUp" data-wow-delay="0.2s">
							<div class="services-icon">
								<TrendingUpIcon
									style={{
										height: "60px",
										width: "60px",
										marginTop: "5px",
									}}
								/>
							</div>

							<div class="services-description">
								<h1>See Growth</h1>
								<p>
									Marketing is one of the most important factors to growing a
									business. With our marketing plan and website
									creation/management your business will begin to take off.
								</p>
							</div>
						</div>
						<div class="col-sm-4 wow fadeInUp" data-wow-delay="0.3s">
							<div class="services-icon">
								<WebIcon
									style={{
										height: "60px",
										width: "60px",
										marginTop: "5px",
									}}
								/>
							</div>
							<div class="services-description">
								<h1>Interactive Website</h1>
								<p>
									It is key to have a website that is interactive. We build
									websites in React, which allows us to make it interactive and
									design it to not only reach your consumer, but to turn them
									into leads.
								</p>
							</div>
						</div>
						<div class="col-sm-4 wow fadeInUp" data-wow-delay="0.4s">
							<div class="services-icon">
								<SearchIcon
									style={{
										height: "60px",
										width: "60px",
										marginTop: "5px",
									}}
								/>
							</div>
							<div class="services-description">
								<h1>Get Found</h1>
								<p>
									Build your SEO, Instagram, Facebook, and Twitter footprint.
									Building on these platforms can be difficult and time
									consuming. Let us take the hassle of developing leads.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
