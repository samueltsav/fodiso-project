/** @format */

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Services from "../components/Services";
import OurPartners from "../components/OurPartners";

function Home() {
	return (
		<div>
			{<Header />}
			{<Services />}
			{<OurPartners />}
			{<Footer />}
		</div>
	);
}

export default Home;
