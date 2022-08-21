/** @format */

import React from "react";
import Partners from "./Partners";
import interswitch from "../images/interswitch_logo.png";

function OurPartners() {
	return (
		<>
			<div className="partners">
				<div className="row">
					<h2 className="topline--primary">our global partners</h2>
					<div className="col-1-of-4">
						{<Partners partnersLogo={interswitch} alt="interswitch_logo" />}
					</div>
					<div className="col-1-of-4">
						{<Partners partnersLogo={interswitch} alt="interswitch_logo" />}
					</div>
					<div className="col-1-of-4">
						{<Partners partnersLogo={interswitch} alt="interswitch_logo" />}
					</div>
					<div className="col-1-of-4">
						{<Partners partnersLogo={interswitch} alt="interswitch_logo" />}
					</div>
				</div>
			</div>
		</>
	);
}

export default OurPartners;
