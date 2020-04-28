import React, { useEffect, useState } from "react";
import { makeStyles, IconButton, Drawer } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ExploreIcon from "@material-ui/icons/Explore";
import HelpIcon from "@material-ui/icons/Help";
import { Link } from "react-scroll";

const Nav = (props) => {
	const [scrolled, setScrolled] = useState();
	const [drawerState, setDrawerState] = useState({ right: false });
	const [showHamburger, setShowHamburger] = useState(false);
	console.log(props.location.pathname);

	useEffect((_) => {
		if (window.innerWidth < 767) {
			setShowHamburger(true);
		}
		const handleScroll = (_) => {
			if (window.pageYOffset > 1) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return (_) => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const useStyles = makeStyles({
		paper: {
			height: "6vh",
			width: "100vw",
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			fontFamily: "Muli, sans-serif",
			position: "sticky",
			top: "0",
			zIndex: "1000",
			paddingLeft: 10,
			// paddingRight: 10
		},
		list: {
			width: 250,
		},
	});
	const classes = useStyles();

	// const navDisplay = () => {
	// 	switch (props.history.pathname) {
	// 		case "/contactus":
	// 			return "/contactus";
	// 		default:
	// 			return "/";
	// 	}
	// };

	const toggleDrawer = (side, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setDrawerState({ ...drawerState, [side]: open });
	};

	const sideList = (side) => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}
		>
			<List className="page-scroll">
				<Link to="main" smooth={true}>
					<ListItem button key={"home"} onClick={toggleDrawer("right", false)}>
						<ListItemIcon>
							<HomeRoundedIcon />
						</ListItemIcon>
						<ListItemText primary={"Home"} />
					</ListItem>
				</Link>
				<Link to="services" smooth={true}>
					<ListItem
						button
						key={"services"}
						onClick={toggleDrawer("right", false)}
					>
						<ListItemIcon>
							<ExploreIcon />
						</ListItemIcon>
						<ListItemText primary={"Services"} />
					</ListItem>
				</Link>
				<Link to="features" smooth={true}>
					<ListItem
						button
						key={"features"}
						onClick={toggleDrawer("right", false)}
					>
						<ListItemIcon>
							<HelpIcon />
						</ListItemIcon>
						<ListItemText primary={"Features"} />
					</ListItem>
				</Link>
				{/* <Link to="reviews" smooth={true}>
					<ListItem
						button
						key={"reviews"}
						onClick={toggleDrawer("right", false)}
					>
						<ListItemIcon>
							<HelpIcon />
						</ListItemIcon>
						<ListItemText primary={"Reviews"} />
					</ListItem>
				</Link> */}
				<Link to="pricing" smooth={true}>
					<ListItem
						button
						key={"pricing"}
						onClick={toggleDrawer("right", false)}
					>
						<ListItemIcon>
							<HelpIcon />
						</ListItemIcon>
						<ListItemText primary={"Pricing"} />
					</ListItem>
				</Link>
				<Link to="contact-us" smooth={true}>
					<ListItem
						button
						key={"contactus"}
						onClick={toggleDrawer("right", false)}
					>
						<ListItemIcon>
							<HelpIcon />
						</ListItemIcon>
						<ListItemText primary={"Contact Us"} />
					</ListItem>
				</Link>
			</List>
		</div>
	);

	return (
		<div class="container">
			<nav
				className={`navbar navbar-default ${
					scrolled > 0 ? "past-main" : null
				} navbar-fixed-top`}
				role="navigation"
			>
				<div class="container">
					{/* <!-- Brand and toggle get grouped for better mobile display --> */}
					<div class="navbar-header page-scroll">
						<IconButton
							className="navbar-toggle"
							style={
								showHamburger
									? { marginRight: "5px", top: "-5px" }
									: { display: "none" }
							}
							onClick={toggleDrawer("right", true)}
						>
							<MenuRoundedIcon
								style={scrolled ? { color: "black" } : { color: "white" }}
								fontSize="large"
							/>
						</IconButton>

						<Link to="main" smooth={true} className="navbar-brand page-scroll">
							<div className="logo-space" button>
								{" "}
							</div>
						</Link>
					</div>

					<div
						className="collapse navbar-collapse navbar-right"
						id="bs-example-navbar-collapse-1"
					>
						<ul class="nav navbar-nav">
							<li>
								<Link style={{ cursor: "pointer" }} to="main" smooth={true}>
									Home
								</Link>
							</li>
							<li>
								<Link style={{ cursor: "pointer" }} to="services" smooth={true}>
									Services
								</Link>
							</li>
							<li>
								<Link style={{ cursor: "pointer" }} to="features" smooth={true}>
									Features
								</Link>
							</li>
							{/* <li>
								<Link style={{ cursor: "pointer" }} to="reviews" smooth={true}>
									Reviews
								</Link>
							</li> */}
							<li>
								<Link style={{ cursor: "pointer" }} to="pricing" smooth={true}>
									Pricing
								</Link>
							</li>
							<li>
								<Link
									style={{ cursor: "pointer" }}
									to="contact-us"
									smooth={true}
								>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
					<Drawer
						anchor="right"
						open={drawerState.right}
						onClose={toggleDrawer("right", false)}
					>
						{sideList("right")}
					</Drawer>
				</div>
			</nav>
		</div>
	);
};

export default withRouter(Nav);
