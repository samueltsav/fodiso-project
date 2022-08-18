/** @format */

import React from "react";

function TextBox(props) {
	return (
		<>
			<div className="text--box">
				<span className="text--box-icon">{props.icon}</span>
				<span>
					<h3 className="text--box-topline">{props.topline}</h3>
				</span>
				<span>
					<p className="text--box-paragraph">{props.paragraph}</p>
				</span>
			</div>
		</>
	);
}

export default TextBox;
