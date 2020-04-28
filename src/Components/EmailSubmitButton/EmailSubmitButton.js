import React from "react";
import axios from "axios";
import swal from "sweetalert";

const EmailSubmitButton = (props) => {
	const handleEmailSubmit = async () => {
		if (!props.valid) {
			return swal({
				title: "Invalid Email",
				text: "Please put in a valid email",
				icon: "error",
				button: "Will Do",
			});
		}
		axios
			.post("/api/email", { email: props.email })
			.then((res) => {
				console.log(res);
				return swal({
					title: "Marketing Walk-Through Sent!",
					text: "Check your email, it's there!",
					icon: "success",
					button: "Awesome!",
				});
			})
			.catch((err) => {
				console.log(err);
				return swal({
					title: "That Email Has Been Used.",
					text: "Check your email to see if it is correct.",
					icon: "error",
					button: "Try Again!",
				});
			});
	};
	console.log(props.email);
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
