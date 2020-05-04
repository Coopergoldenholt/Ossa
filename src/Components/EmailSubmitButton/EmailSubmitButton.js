import React, { useState } from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";

const EmailSubmitButton = (props) => {
	const [loading, setLoading] = useState(false);
	const title = () => {
		if (loading === true) {
			return null;
		}
	};
	const handleEmailSubmit = async () => {
		if (!props.valid) {
			return swal({
				title: "Invalid Email",
				text: "Please put in a valid email",
				icon: "error",
				button: "Will Do",
			});
		} else {
			setLoading(true);
			swal(
				<div>
					{loading ? (
						"Loading"
					) : (
						<>
							<h1>Hello!</h1>
							<p>I am a React component inside a SweetAlert modal.</p>
						</>
					)}
				</div>
			);
			axios
				.post("/api/email", { email: props.email })
				.then((res) => {
					setLoading(false);
					swal(
						<div>
							<h1>Hello!</h1>
							<p>I am a React component inside a SweetAlert modal.</p>
						</div>
					);
				})
				.catch((err) => {
					setLoading(false);
					console.log(err);
					return swal({
						title: "That Email Has Been Used.",
						text: "Check your email to see if it is correct.",
						icon: "error",
						button: "Try Again!",
					});
				});
		}
	};

	return (
		<>
			<input
				class="submit-button"
				type="submit"
				value="Let's Market"
				onClick={() => handleEmailSubmit()}
			/>
		</>
	);
};

export default EmailSubmitButton;
