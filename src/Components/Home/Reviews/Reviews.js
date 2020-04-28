import React, { useEffect, useState } from "react";

const Reviews = () => {
	const [current, setCurrent] = useState(0);
	useEffect(() => {
		if (current === 2) {
			setTimeout(() => setCurrent(0), 4000);
		} else {
			const next = current + 1;
			setTimeout(() => setCurrent(next), 4000);
		}
	}, [current]);
	const reviews = [
		{
			image:
				"https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg",
			content:
				"alsjdhfljashdl;fjasfas;lkfjajf aslkjflaksj df kfja lifj alkjflk fk jfk fj;lkd jflaisk jdflkajf",
			name: "Bob Smith",
			title: "CEO",
		},
		{
			image:
				"https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg",
			content:
				"alsjdhfljashdl;fjasfas;lkfjajf aslkjflaksj df kfja lifj alkjflk fk jfk fj;lkd jflaisk jdflkajf",
			name: "Geaorg Castanza",
			title: "Marketing Genius",
		},
		{
			image:
				"https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg",
			content:
				"alsjdhfljashdl;fjasfas;lkfjajf aslkjflaksj df kfja lifj alkjflk fk jfk fj;lkd jflaisk jdflkajf",
			name: "Jerry Sienfiled",
			title: "Comedian",
		},
	];
	return (
		<div class="testimonial-section" id="reviews">
			<div class="container">
				<div class="row text-center">
					<div class="col-md-12">
						<h1>Destiny is loved by many Startups.</h1>
						<p class="sub">
							Listen what your friends are saying about us. Just get the code
							and sit tight, you'll witness its power and performance in lead
							conversion.
						</p>
						<div class="testimonials owl-theme">
							<div class="testimonial-single">
								<img
									class="img-circle"
									src={`${reviews[current].image}`}
									alt="Client Testimonoal"
								/>
								<div
									class="testimonial-text wow fadeInUp"
									data-wow-delay="0.2s"
								>
									<p>{`${reviews[current].content}`}</p>
									<h3>- {`${reviews[current].name}`}</h3>
									<h3>{`${reviews[current].title}`}</h3>
									<i class="ion ion-star"></i>
									<i class="ion ion-star"></i>
									<i class="ion ion-star"></i>
									<i class="ion ion-star"></i>
									<i class="ion ion-star"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reviews;
