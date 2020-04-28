import React from "react";

const Features = () => {
	return (
		<div class="flex-features" id="features">
			<div class="container nopadding">
				<div class="flex-split">
					<div class="f-left wow fadeInUp" data-wow-delay="0s">
						<div class="left-content">
							<img
								class="img-responsive"
								src="https://images.techhive.com/images/article/2014/08/lead-gen-thinkstock-100369499-large.jpg"
								alt=""
							/>
						</div>
					</div>
					<div class="f-right wow fadeInUp" data-wow-delay="0.2s">
						<div class="right-content">
							<h2>Built for Lead Generation.</h2>
							<p>
								Let us handle the dirty work of building your brand and creating
								leads. You worry about closing and making money.
							</p>
							<ul>
								<li>
									<i class="ion-android-checkbox-outline"></i>Fully Responsive
									Website.
								</li>
								<li>
									<i class="ion-android-checkbox-outline"></i>No long term
									contracts.
								</li>
								<li>
									<i class="ion-android-checkbox-outline"></i>Development of a
									personal marketing mix.
								</li>
							</ul>
							<button class="btn btn-primary btn-action btn-fill">
								Learn More
							</button>
						</div>
					</div>
				</div>

				{/* <div class="flex-split">
            <div class="f-right">
                <div class="right-content wow fadeInUp" data-wow-delay="0.2s">
                    <h2>Built for Lead Generation.</h2>
                    <p>
                        Let us handle the dirty work of building you brand and
                        creating leads. You worry about closing and making money.
                    </p>
                    <ul>
                        <li>
                            <i class="ion-android-checkbox-outline"></i>Fully
                            Responsive Website.
                        </li>
                        <li>
                            <i class="ion-android-checkbox-outline"></i>No long term
                            contracts.
                        </li>
                        <li>
                            <i class="ion-android-checkbox-outline"></i>Development of
                            a personal marketing mix.
                        </li>
                    </ul>
                    <button class="btn btn-primary btn-action btn-fill">
                        Learn More
                    </button>
                </div>
            </div>
            <div class="f-left">
                <div class="left-content wow fadeInUp" data-wow-delay="0.3s">
                    <img
                        class="img-responsive"
                        src="https://images.techhive.com/images/article/2014/08/lead-gen-thinkstock-100369499-large.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div> */}
			</div>
		</div>
	);
};

export default Features;
