import Navbar from "./components/Navbar";
import Main from "./components/Main";
import React from "react";

export default function App() {
	const [darkMode, setDarkMode] = React.useState(false);
	function toggleDarkMode() {
		setDarkMode((prevDarkMode) => !prevDarkMode);
	}
	return (
		<>
			<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<Main darkMode={darkMode} />
		</>
	);
}
