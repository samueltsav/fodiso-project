/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Header() {
	return (
		<>
			<header className="header">
				{<Navbar />}
				<div className="header--box">
					<h1 className="header--heading">
						<span className="header--heading-main">FODISO</span>
						<span className="header--heading-sub">School administrator</span>
					</h1>
					<Link to="/Contact" className="btn--link">
						<button className="btn--primary">Make Enquiry</button>
					</Link>
				</div>
			</header>
		</>
	);
}

export default Header;
