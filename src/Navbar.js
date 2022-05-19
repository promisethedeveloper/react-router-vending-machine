import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="Navbar">
			<NavLink exact to="/">
				Home
			</NavLink>
			<NavLink exact to="/cocacola">
				Cocacola
			</NavLink>
			<NavLink exact to="/fanta">
				Fanta
			</NavLink>
			<NavLink exact to="/sprite">
				Sprite
			</NavLink>
		</nav>
	);
};

export default Navbar;
