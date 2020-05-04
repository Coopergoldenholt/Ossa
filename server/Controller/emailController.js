const nodemailer = require("nodemailer");
require("dotenv").config();
const path = require("path");
const { EMAIL_PASS } = process.env;
// const marketingPlan = require("../assets/OssaMarketingPlan.pdf");

let transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	service: "gmail",
	auth: {
		user: "ossamarket@gmail.com",
		pass: EMAIL_PASS,
	},
	tls: {
		rejectUnauthorized: false,
	},
});

module.exports = {
	addEmail: async (req, res) => {
		const db = await req.app.get("db");
		const { email, firstName, lastName, message, phone } = req.body;
		console.log(email);
		const date = `${new Date().getFullYear()}-${
			new Date().getMonth() + 1
		}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}`;
		const [emailCheck] = await db.get_email(email);
		console.log(emailCheck);

		if (emailCheck) {
			console.log("Hello");
			res.status(400).send("Email in use");
		} else {
			const [createdEmail] = await db.email.insert_email([
				email,
				true,
				false,
				false,
				date,
				firstName,
				lastName,
				message,
				phone,
			]);
			req.session.user = { email: email, recievedMarketingPlan: true };
			transporter.sendMail({
				from: "ossamarket@gmail.com",
				to: email,
				subject: "An Attached File",
				text: "Check out this attached pdf file",
				attachments: [
					{
						filename: "OssaMarketingPlan.pdf",
						path: path.join(__dirname, "./OssaMarketinPlan.pdf"),
						contentType: "application/pdf",
					},
				],
			});
			res.status(200).send("Email Saved");
		}
	},
	addMessage: async (req, res) => {
		const db = req.app.get("db");
		const { firstName, lastName, email, phone, message } = req.body;
		const date = `${new Date().getFullYear()}-${
			new Date().getMonth() + 1
		}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}`;
		const [emailCheck] = await db.email.get_email(email);
		if (emailCheck) {
			const [updatedEmail] = await db.email.update_email([
				email,
				firstName,
				lastName,
				message,
				phone,
			]);
			req.session.user = { email: email, requestedMoreInformation: true };
			transporter.sendMail({
				from: "ossamarket@gmail.com",
				to: email,
				subject: "Ossa Marketing",
				text:
					"Thank you for your interest in Ossa Marketing. One of our representatives will be reaching out shortly.",
			});
			res.status(200).send("User Updated");
		} else {
			const [createdEmail] = await db.email.insert_email([
				email,
				true,
				false,
				false,
				date,
				firstName,
				lastName,
				message,
				phone,
			]);
			req.session.user = { email: email, requestedMoreInformation: true };
			transporter.sendMail({
				from: "ossamarket@gmail.com",
				to: email,
				subject: "Ossa Marketing",
				text:
					"Thank you for your interest in Ossa Marketing. One of our representatives will be reaching out shortly.",
			});
		}
	},
};
