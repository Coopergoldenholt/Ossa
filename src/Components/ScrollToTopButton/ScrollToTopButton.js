import React from "react";
import { Link } from "react-scroll";

const ScrollToTopButton = () => {
	return (
		<Link
			id="back-top"
			to="main"
			smooth={true}
			className="back-to-top page-scroll"
			href="#main"
		>
			<i class="ion-ios-arrow-thin-up"></i>
		</Link>
	);
};

export default ScrollToTopButton;
