import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const FeatureWithImage = () => {
	return (
		<div class="feature_huge text-center">
			<div class="container nopadding">
				<div class="col-md-12">
					<img
						class="img-responsive wow fadeInUp"
						data-wow-delay="0.1s"
						src="https://assets.entrepreneur.com/content/3x2/2000/20191112054904-FotoJet32.jpeg"
						alt=""
						style={{ maxWidth: "700px", width: "100%" }}
					/>
				</div>
				<div class="feature_list">
					<div class="col-sm-4 wow fadeInUp" data-wow-delay="0.2s">
						<PersonIcon
							style={{
								height: "60px",
								width: "60px",
								marginTop: "5px",
							}}
						/>
						{/* <img src="assets/logos/feature_icon.png" alt="Feature" /> */}
						<h1>One On One</h1>
						<p>
							Your buisness is serious, and that's how we take it. Lets get your
							vision, so we can help others see it.
						</p>
					</div>
					<div class="col-sm-4 wow fadeInUp" data-wow-delay="0.4s">
						<TrackChangesIcon
							style={{
								height: "60px",
								width: "60px",
								marginTop: "5px",
							}}
						/>
						<h1>Tracking Progress</h1>
						<p>
							Ossa implements Google analytics and Facebook pixel so you can
							track exactly who is coming to your sight and where from.
						</p>
					</div>
					<div class="col-sm-4 wow fadeInUp" data-wow-delay="0.6s">
						<ArrowForwardIcon
							style={{
								height: "60px",
								width: "60px",
								marginTop: "5px",
							}}
						/>
						<h1>Always Improving</h1>
						<p>
							Things change. We will be evaluating your online footprint and
							constantly searching for ways your marketing strategy can evolve.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeatureWithImage;
