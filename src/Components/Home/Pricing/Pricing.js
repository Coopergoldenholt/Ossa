import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-scroll";

const Pricing = () => {
	return (
		<div class="pricing-section no-color text-center" id="pricing">
			<div class="container">
				<div class="col-md-12 col-sm-12 nopadding">
					<div class="pricing-intro">
						<h1 class="wow fadeInUp" data-wow-delay="0s">
							There Is A Price For Everyone.
						</h1>
						<p class="wow fadeInUp" data-wow-delay="0.2s">
							Take a look at our different packages. Find a plan that suits you.
						</p>
					</div>
					<div class="col-sm-6 nopadding">
						<div class="table-left wow fadeInUp" data-wow-delay="0.4s">
							<div class="icon">
								<ShoppingCartIcon
									style={{
										height: "60px",
										width: "60px",
										marginTop: "5px",
									}}
								/>
								{/* <img src="assets/logos/cart2.png" alt="Icon" /> */}
							</div>
							<div class="pricing-details">
								<h2>Websites Starting at</h2>
								<span>$3500</span>
								<p>
									We know websites can be expensive. Contact us for possible
									financing options!
								</p>
								<ul>
									<li>Website built for Lead Generation </li>
									<li>SEO, Google Analytics, Facebook Pixel, etc.</li>
									<li>Built around your logo and color scheme</li>
									<li>Pick from our lead generating templates. </li>
									<li>30 day Money Back guarantee.</li>
								</ul>
								<Link to="contact-us" smooth={true}>
									<button class="btn btn-primary btn-action btn-fill">
										Get Started
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div class="col-sm-6 nopadding">
						<div class="table-right wow fadeInUp" data-wow-delay="0.6s">
							<div class="icon">
								<ShoppingCartIcon
									style={{
										height: "60px",
										width: "60px",
										marginTop: "5px",
									}}
								/>
							</div>
							<div class="pricing-details">
								<h2>Basic Plan</h2>
								<span>$250/Month</span>
								<p>
									People for lower budgets but want to start building their
									online brand.
								</p>
								<ul>
									<li>Post ten times a month on three platforms</li>
									<li>One on one marketing walk-through</li>
									<li>Follow/Unfollow ten users per day</li>
									<li>Handle comments on posts that we create</li>
									<li>Run up to three PPC adds at a time</li>
								</ul>
								<Link to="contact-us" smooth={true}>
									<button class="btn btn-primary btn-action btn-fill">
										Get Started
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div class="col-sm-6 nopadding" style={{ paddingTop: "10px" }}>
						<div class="table-left wow fadeInUp" data-wow-delay="0.4s">
							<div class="icon">
								<ShoppingCartIcon
									style={{
										height: "60px",
										width: "60px",
										marginTop: "5px",
									}}
								/>
								{/* <img src="assets/logos/cart2.png" alt="Icon" /> */}
							</div>
							<div class="pricing-details">
								<h2>Silver Package</h2>
								<span>$500/Month</span>
								<p>
									People that want to take their online marketing more serious.
								</p>
								<p>(Includes Previous Package)</p>
								<ul>
									<li>Post Twenty Times a Month On Three Platforms</li>
									<li>
										Handle up to five different Online Adds (Run split-marketing
										tests to figure out which ads are running best)
									</li>
									<li>Write six marketing emails a month</li>
									<li>Follow/Unfollow 30 users per day</li>
									<li></li>
								</ul>
								<Link to="contact-us" smooth={true}>
									<button class="btn btn-primary btn-action btn-fill">
										Get Started
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div class="col-sm-6 nopadding" style={{ paddingTop: "10px" }}>
						<div class="table-right wow fadeInUp" data-wow-delay="0.6s">
							<div class="icon">
								<ShoppingCartIcon
									style={{
										height: "60px",
										width: "60px",
										marginTop: "5px",
									}}
								/>
							</div>
							<div class="pricing-details">
								<h2>Gold Plan</h2>
								<span>$1000/Month</span>
								<p>
									You know online marketing is the way to go. (Includes Previous
									Packages)
								</p>
								<ul>
									<li>One Post a day</li>
									<li>Unlimited ads</li>
									<li>Handle all comments</li>
									<li>Comment once per day on another account's post</li>
									<li>Write 15 emails a month</li>
									<li>Contact influencers to run ads</li>
								</ul>
								<Link to="contact-us" smooth={true}>
									<button class="btn btn-primary btn-action btn-fill">
										Get Started
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div class="col-sm-6 nopadding" style={{ paddingTop: "10px" }}>
						<div class="table-left wow fadeInUp" data-wow-delay="0.6s">
							<div class="icon">
								<ShoppingCartIcon
									style={{
										height: "60px",
										width: "60px",
										marginTop: "5px",
									}}
								/>
							</div>
							<div class="pricing-details">
								<h2>All-Inlcusive Plan</h2>
								<span>$3000/Month</span>
								<p>Let us handle everything.</p>
								<p>(Includes Previous Packages)</p>
								<ul>
									<li>Email everyday</li>
									<li>Run Sweepstakes Ads</li>
									<li>Follow/Unfollow 50 people per day</li>
									<li>Comment on three other peoples post per day</li>
									<li>Create more landing pages for your users</li>
								</ul>
								<Link to="contact-us" smooth={true}>
									<button class="btn btn-primary btn-action btn-fill">
										Get Started
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
