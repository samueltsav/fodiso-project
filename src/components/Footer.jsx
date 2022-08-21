/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FcCellPhone } from "react-icons/fc";

function Footer() {
	return (
		<>
			<footer className="footer">
				<div className="row">
					<small className="col-1-of-3">
						<h2 className="footer--heading">
							<em>quick links</em>
						</h2>
						<ul>
							<Link to="/" className="footer--link">
								<li>subscribe to our news letter</li>
							</Link>
							<Link to="/" className="footer--link">
								<li>company profile</li>
							</Link>
							<Link to="/" className="footer--link">
								<li>resources</li>
							</Link>
							<Link to="/Contact" className="footer--link">
								<li>contact us</li>
							</Link>
						</ul>
					</small>
					<small className="col-1-of-3">
						<h2 className="footer--heading">
							<em>social media links</em>
						</h2>
						<ul className="footer--social-links">
							<Link to="/" className="footer--link">
								<li>twitter</li>
							</Link>
							<Link to="/" className="footer--link">
								<li>facebook</li>
							</Link>
							<Link to="/" className="footer--link">
								<li>instagram</li>
							</Link>
						</ul>
					</small>
					<div className="col-1-of-3">
						<small>
							<h2 className="footer--heading">
								<em>contacts</em>
							</h2>
							<div className="footer--contact">
								<span className="footer--contact-icon">
									<ImLocation2 />
								</span>
								<span>
									<p>
										2nd Avenue, Off Iorzua Ayatse Street, Logo I, Makurdi, Benue
										State
									</p>
								</span>
							</div>
							<div className="footer--contact">
								<span className="footer--contact-icon">
									<MdEmail />
								</span>
								<span>
									<p>tsavsamuel@gmail.com</p>
								</span>
							</div>
							<div className="footer--contact">
								<span className="footer--contact-icon">
									<FcCellPhone />
								</span>
								<span>
									<p>08098406763</p>
								</span>
							</div>
							<div className="footer--contact">
								<span className="footer--contact-icon">
									<FaWhatsapp />
								</span>
								<span>
									<p>08160943669</p>
								</span>
							</div>
						</small>
					</div>
				</div>
				<small>
					<p className="copyright">&copy; FODISO 2022. All rights reserved.</p>
				</small>
			</footer>
		</>
	);
}

export default Footer;
