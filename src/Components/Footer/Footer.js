import React from "react";

const Footer = () => {
	return (
		<div class="footer">
			<div class="container">
				<div class="col-md-12 text-center">
					<img
						class="img-circle"
						src="assets/logos/logo.png"
						width="40"
						height="40"
						alt=""
					/>
					<ul class="footer-menu">
						{/* <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Terms</a>
                </li>
                <li>
                    <a href="#">Privacy</a>
                </li> */}
					</ul>
					<div class="footer-text">
						<p>Copyright © 2020 Ossa Inc. All Rights Reserved.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
