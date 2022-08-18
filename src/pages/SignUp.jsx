/** @format */

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SignUp() {
	const [formData, setFormData] = React.useState({
		name: "",
		email: "",
		phoneNumber: "",
		package: "",
		password: "",
		passwordConfirm: "",
	});

	console.log(formData);

	function handleChange(event) {
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[event.target.name]: event.target.value,
			};
		});
	}

	function handleSubmit(event) {
		event.preventDefault();

		if (formData.password === formData.passwordConfirm) {
			console.log("Thanks for signing up");
		} else {
			console.log("Passwords do not match!");
			return;
		}
		console.log(formData);
		//submitToApi(formData)
	}

	return (
		<>
			{<Navbar />}
			<section classNameName="signUp">
				<div classNameName="row">
					<h2 className="topline--primary">
						sign up and enjoy our topnotch services!
					</h2>
					<p className="long--copy">
						To sign up for any of our services, please kindly fill the form
						below and select your preferred Package. Submit the form and we will
						contact you on the next steps
					</p>
					<form onSubmit={handleSubmit} className="signUp--form">
						<div className="form--group">
							<input
								type="text"
								name="name"
								className="form--input"
								id="name"
								placeholder="Your full name"
								required
								onChange={handleChange}
								value={formData.name}
							/>
							<label htmlFor="name" className="form--label">
								Name
							</label>
						</div>
						<div className="form--group">
							<input
								type="email"
								name="email"
								className="form--input"
								id="email"
								placeholder="Your email address"
								required
								onChange={handleChange}
								value={formData.email}
							/>
							<label htmlFor="email" className="form--label">
								Email address
							</label>
						</div>
						<div className="form--group">
							<input
								type="password"
								name="password"
								className="form--input"
								id="password"
								placeholder="Choose a password"
								required
								onChange={handleChange}
								value={formData.password}
							/>
							<label htmlFor="email" className="form--label">
								Password
							</label>
						</div>
						<div className="form--group">
							<input
								type="password"
								name="passwordConfirm"
								className="form--input"
								id="passwordConfirm"
								placeholder="passwordConfimr"
								required
								onChange={handleChange}
								value={formData.passwordConfirm}
							/>
							<label htmlFor="passwordConfirm" className="form--label">
								Confirm password
							</label>
						</div>
						<div className="form--group">
							<input
								type="text"
								name="phoneNumber"
								className="form--input"
								id="phone--number"
								placeholder="Your phone number"
								required
								onChange={handleChange}
								value={formData.phoneNumber}
							/>
							<label htmlFor="phone--number" className="form--label">
								Phone number
							</label>
						</div>
						<div className="form--group">
							<select
								className="form--input"
								name="package"
								id="package"
								value={formData.package}
								onChange={handleChange}
							>
								<option value="">--Select--</option>
								<option value="basic">Basic</option>
								<option value="advanced">Advanced</option>
								<option value="premium">Premium</option>
							</select>
						</div>
						<div className="form--group">
							<div className="btn">
								<button className="btn--primary-2">Sign Up</button>
							</div>
						</div>
					</form>
				</div>
			</section>
			{<Footer />}
		</>
	);
}

export default SignUp;
