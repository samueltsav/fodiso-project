/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./styles/index.scss";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";

function App() {
	return (
		<>
			<div className="App">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="Contact" element={<Contact />} />
						<Route path="SignUp" element={<SignUp />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
