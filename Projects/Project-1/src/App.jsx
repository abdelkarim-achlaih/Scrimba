import Navbar from "./components/Navbar";
import Main from "./components/Main";
import React from "react";

export default function App() {
	const [darkMode, setDarkMode] = React.useState("");
	function toggleDarkMode() {
		setDarkMode((prevDarkMode) => (prevDarkMode === "" ? "dark" : ""));
	}
	return (
		<>
			<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<Main darkMode={darkMode} />
		</>
	);
}
