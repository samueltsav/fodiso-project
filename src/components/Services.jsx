/** @format */

import React from "react";
import { Link } from "react-router-dom";
import TextBox from "./TextBox";
import { FaSchool } from "react-icons/fa";
import { SiBmcsoftware } from "react-icons/si";
import { WiSmallCraftAdvisory } from "react-icons/wi";

function Services() {
	return (
		<>
			<section className="services">
				<div className="row">
					<h2 className="topline--primary">your business deserves a boost</h2>
					<p className="long--copy">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
						provident molestiae sapiente totam vitae? Quibusdam maxime quod ad,
						labore amet odit quam optio facere sequi deleniti blanditiis.
						Quibusdam, nemo debitis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Aut provident molestiae sapiente totam vitae?
						Quibusdam maxime quod ad, labore amet odit quam optio facere sequi
						deleniti blanditiis. Quibusdam, nemo debitis.
					</p>
					<div className="col-1-of-3">
						<TextBox
							icon={<FaSchool></FaSchool>}
							topline="school administration"
							paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quam mollitia labore ea consectetur, quia, quas ipsam ipsum fuga culpa tempora doloremque sint, reprehenderit autem quod nemo soluta accusantium possimus."
						/>
					</div>
					<div className="col-1-of-3">
						<TextBox
							icon={<SiBmcsoftware></SiBmcsoftware>}
							topline="software solutions"
							paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequuntur beatae esse consectetur incidunt, alias corporis accusantium neque nihil tempore sequi animi itaque repellat voluptatibus cupiditate nostrum dignissimos perferendis quam."
						/>
					</div>
					<div className="col-1-of-3">
						<TextBox
							icon={<WiSmallCraftAdvisory></WiSmallCraftAdvisory>}
							topline="consultancy services"
							paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ab quae? Iusto molestiae sapiente sed quasi illum, corrupti dolorem tempora quae recusandae magni architecto repudiandae ea blanditiis ipsa quisquam dignissimos."
						/>
					</div>
				</div>
				<Link to="/Contact" className="btn--link">
					<button className="btn--primary-2">Contact Us</button>
				</Link>
			</section>
		</>
	);
}

export default Services;
