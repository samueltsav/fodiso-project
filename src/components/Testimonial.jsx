/** @format */

import React from "react";

function Testimonial(props) {
	return (
		<>
			<div className="row">
				<div className="testimonial--container">
					<div className="testimonial">
						<figure className="testimonial--photo-container">
							<img
								src={`../public_images/${props.img}`}
								className="testimonial--photo"
								alt=""
							/>
							<figcaption className="testimonial--photo-caption">
								{props.caption}
							</figcaption>
						</figure>
						<p className="testiominal--location">
							<strong>Location: </strong>
							{props.location}
						</p>
						<p className="testimonial--comment">
							<strong>Comment: </strong>
							{props.comment}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Testimonial;

/*	<h4 className="testimonial--location">location: </h4>
		<h3 className="testimonial--topline">I love FODISO</h3>
		<p className="testimonial--paragraph">comment: </p>
	</div>
</div>; */
