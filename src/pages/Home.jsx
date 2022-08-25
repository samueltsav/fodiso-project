/** @format */

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Services from "../components/Services";
import OurPartners from "../components/OurPartners";
import Testimonial from "../components/Testimonial";
import data from "../data";

function Home() {
	const testimonials = data.map((item) => {
		return (
			<Testimonial
				key={item.id}
				img={item.img}
				caption={item.caption}
				topline={item.topline}
				location={item.location}
				comment={item.comment}
			/>
		);
	});

	return (
		<div>
			{<Header />}
			{<Services />}
			<div className="section--testimonial">
				<div className="row">
					<h2 className="topline--primary">our clients testify</h2>
				</div>
				<div className="testimonial--container">{testimonials}</div>
			</div>

			{<OurPartners />}
			{<Footer />}
		</div>
	);
}

export default Home;
