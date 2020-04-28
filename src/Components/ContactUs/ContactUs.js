import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const ContactUs = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState(0);
	const [message, setMessage] = useState("");

	const handleSubmit = () => {
		axios
			.post("/api/message", { firstName, lastName, email, phone, message })
			.then((res) => {
				return swal({
					title: "Thank You For Reaching Out!",
					text: "One of our representatives will be reaching out shortly",
					icon: "success",
					button: "Sounds Good!",
				});
			});
	};
	return (
		// <div
		// 	class="wrapper animsition"
		// 	data-animsition-in-class="fade-in"
		// 	data-animsition-in-duration="1000"
		// 	data-animsition-out-class="fade-out"
		// 	data-animsition-out-duration="1000"
		// >
		// {/* <div class="main" id="main"> */}

		<div class="contact-section" id="contact-us">
			<div class="container">
				<div class="col-md-9">
					<h1>Have Questions About Joining The Ossa Family?</h1>
					<p>
						Put your information below and we will reach out and answer any
						questions that you have.
					</p>
					<div class="contact-form">
						<form
							id="contact-form"
							method="post"
							action="assets/php/contact.php"
							role="form"
						>
							<div class="messages"></div>
							<div class="controls">
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<label for="form_name">First Name *</label>
											<input
												onChange={(e) => setFirstName(e.target.value)}
												id="form_name"
												type="text"
												name="name"
												class="form-control"
												placeholder="Please enter your first name *"
												required="required"
												data-error="Firstname is required."
											/>
											<div class="help-block with-errors"></div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label for="form_lastname">Last Name *</label>
											<input
												onChange={(e) => setLastName(e.target.value)}
												id="form_lastname"
												type="text"
												name="surname"
												class="form-control"
												placeholder="Please enter your last name *"
												required="required"
												data-error="Lastname is required."
											/>
											<div class="help-block with-errors"></div>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<label for="form_email">Email *</label>
											<input
												onChange={(e) => setEmail(e.target.value)}
												id="form_email"
												type="email"
												name="email"
												class="form-control"
												placeholder="Please enter your email *"
												required="required"
												data-error="Valid email is required."
											/>
											<div class="help-block with-errors"></div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label for="form_phone">Phone</label>
											<input
												onChange={(e) => setPhone(e.target.value)}
												id="form_phone"
												type="tel"
												name="phone"
												class="form-control"
												placeholder="Please enter your phone"
											/>
											<div class="help-block with-errors"></div>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12">
										<div class="form-group">
											<label for="form_message">
												What Products Are you Interested In? *
											</label>
											<textarea
												onChange={(e) => setMessage(e.target.value)}
												id="form_message"
												name="message"
												class="form-control"
												placeholder="Please enter your message here *"
												rows="4"
												required="required"
												data-error="Please,leave us a message."
											></textarea>
											<div class="help-block with-errors"></div>
										</div>
									</div>
									<div class="col-md-12">
										<input
											onClick={() => handleSubmit()}
											class="btn btn-success btn-send"
											value="Send message"
										/>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		// </div>
		// </div>
	);
};

export default ContactUs;
