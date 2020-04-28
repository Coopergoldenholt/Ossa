import React from "react";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import "./css/ionicons.min.css";
import "./css/magnific-popup.css";
import "./css/owl.carousel.css";
import "./css/owl.theme.css";
import "./css/animsition.min.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/style.css";
import routes from "./routes";
import ScrollToTopButton from "./Components/ScrollToTopButton/ScrollToTopButton";
import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<header className="App-header"></header>
			<Nav />
			{routes}
			<ScrollToTopButton />
			<Footer />
		</div>
	);
}

export default App;
