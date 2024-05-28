import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./includes/Header";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}
