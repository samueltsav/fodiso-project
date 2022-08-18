/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../images/logo.png";

function Navbar() {
	return (
		<>
			<nav className="row">
				<ul className="menu">
					<li className="logo">
						<img src={logo} className="logo" alt="logo" />
					</li>
					<li className="nav-item">
						<Link to="/" className="nav-link">
							home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/" className="nav-link">
							services
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Products
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/" className="nav-link">
							clients
						</Link>
					</li>
					<li className="nav-item nav-item_btn">
						<Link to="/SignUp" className="nav-link nav-link_btn">
							sign up
						</Link>
					</li>
					<li className="toggle">
						<span className="menu-bars">
							<FaBars />
						</span>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
