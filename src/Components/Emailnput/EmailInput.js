import React, { useState, useEffect } from "react";
import EmailSubmitButton from "../EmailSubmitButton/EmailSubmitButton";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";

const EmailInput = (props) => {
	const [email, setEmail] = useState(false);
	const [validEmail, setValidEmail] = useState("");
	useEffect(() => {
		if (email) {
			setValidEmail(validEmailRegex.test(email));
		}
	}, [email]);
	const validEmailRegex = RegExp(
		/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
	);

	return (
		<>
			<div className="subscribe-form wow zoomIn">
				<span
					className="inputWithIcon"
					style={{ position: "relative", width: "300px" }}
				>
					<input
						className={props.className}
						type="email"
						name="email"
						style={{ paddingRight: "35px", paddingLeft: "5px" }}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Email Here"
						autocomplete="off"
					/>

					{!email ? null : validEmail ? (
						<DoneIcon style={{ position: "absolute", right: 3, bottom: -2 }} />
					) : (
						<CloseIcon style={{ position: "absolute", right: 3, bottom: -2 }} />
					)}
				</span>

				<EmailSubmitButton valid={validEmail} email={email} />
			</div>
		</>
	);
};

export default EmailInput;
