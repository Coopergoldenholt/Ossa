import React from "react";

const Counter = () => {
	return (
		<div class="counter-section">
			<div class="container">
				<div class="row text-center">
					<div class="col-sm-3 col-xs-6">
						<div class="counter-up">
							<div class="counter-icon">
								<i class="ion-android-download"></i>
							</div>
							<h3>
								<span class="counter">46</span>K+
							</h3>
							<div class="counter-text">
								<h4>Downloads</h4>
							</div>
						</div>
					</div>
					<div class="col-sm-3 col-xs-6">
						<div class="counter-up">
							<div class="counter-icon">
								<i class="ion-cube"></i>
							</div>
							<h3>
								<span class="counter">66</span>
							</h3>
							<div class="counter-text">
								<h4>Awards</h4>
							</div>
						</div>
					</div>
					<div class="col-sm-3 col-xs-6">
						<div class="counter-up">
							<div class="counter-icon">
								<i class="ion-ios-people"></i>
							</div>
							<h3>
								<span class="counter">43</span>K+
							</h3>
							<div class="counter-text">
								<h4>Satisfied Users</h4>
							</div>
						</div>
					</div>
					<div class="col-sm-3 col-xs-6">
						<div class="counter-up">
							<div class="counter-icon">
								<i class="ion-ios-paper"></i>
							</div>
							<h3>
								<span class="counter">31</span>
							</h3>
							<div class="counter-text">
								<h4>In Press</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Counter;
