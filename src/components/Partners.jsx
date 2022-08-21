/** @format */

import React from "react";

function Partners(props) {
	return (
		<div>
			<img
				src={props.partnersLogo}
				alt={props.alt}
				className="partners--logo"
			/>
		</div>
	);
}

export default Partners;
