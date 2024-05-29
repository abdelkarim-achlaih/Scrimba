import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./includes/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";

import "../server";

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/vans" element={<Vans />} />
				<Route path="/vans/:id" element={<VanDetail />} />
			</Routes>
		</BrowserRouter>
	);
}
