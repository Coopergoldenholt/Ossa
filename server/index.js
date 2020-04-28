require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;
const emailCtrl = require("./Controller/emailController");
const sessCtrl = require("./Controller/sessionController");

// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const app = express();

app.use(express.static(`${__dirname}/../build`));

app.use(express.json());
app.use(
	session({
		secret: SESSION_SECRET,
		resave: true,
		saveUninitialized: true,
	})
);

app.post("/api/email", emailCtrl.addEmail);
app.post("/api/message", emailCtrl.addMessage);
app.post("/api/session", sessCtrl.timesVisited);

massive(CONNECTION_STRING).then((db) => {
	app.set("db", db);
	app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is listening`));
});
