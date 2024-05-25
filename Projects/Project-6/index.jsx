import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./components/Menu/index";
import Toggle from "./components/Toggle/index";

function App() {
	const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

	return (
		<Toggle>
			<Menu>
				<Toggle.Button>
					<Menu.Button>Menu</Menu.Button>
				</Toggle.Button>
				<Toggle.On>
					<Menu.Dropdown>
						<Menu.Item>Home</Menu.Item>
						<Menu.Item>About</Menu.Item>
						<Menu.Item>Contact</Menu.Item>
						<Menu.Item>Blog</Menu.Item>
					</Menu.Dropdown>
				</Toggle.On>
			</Menu>
		</Toggle>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
