import React, { useEffect } from "react";
import axios from "axios";
import HeroSection from "./HeroSection/HeroSection";
import Services from "./Services/Services";
import Features from "./Features/Features";

import Pricing from "./Pricing/Pricing";
import FeatureWithImage from "./FeatureWithImage/FeatureWithImage";
import ThirdFeatureSection from "./ThirdFeatureSection/ThirdFeatureSection";
import ContactUs from "../ContactUs/ContactUs";

import SubscribeNewsLetter from "./SubscribeNewsLetter/SubscribeNewsLetter";

const Home = () => {
	useEffect(() => {
		axios.post("/api/session");
	});
	return (
		<div
			class="wrapper animsition"
			data-animsition-in-class="fade-in"
			data-animsition-in-duration="1000"
			data-animsition-out-class="fade-out"
			data-animsition-out-duration="1000"
		>
			<div class="main" id="main">
				<HeroSection />
				<Services />
				<Features />
				{/* <Reviews /> */}
				<FeatureWithImage />
				{/* <Counter /> */}
				<ThirdFeatureSection />
				<Pricing />
				<ContactUs />
				{/* <Clients /> */}
				<SubscribeNewsLetter />
			</div>
		</div>
	);
};

export default Home;
