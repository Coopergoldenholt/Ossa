import React from "react";
import { Switch, Route } from "react-router-dom";
import ContactUs from "./Components/ContactUs/ContactUs";
import Home from "./Components/Home/Home";

export default (
	<Switch>
		<Route exact path="/" component={Home} />

		<Route path="/contactus" component={ContactUs} />
	</Switch>
);
