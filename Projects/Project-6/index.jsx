import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./components/Menu/index";
import Star from "./components/Star";
import Toggle from "./components/Toggle/index";

function App() {
	return (
		<>
			<Star />
			<br />

			<Menu onOpen={() => console.log("Menu was clicked")}>
				<Menu.Button>Menu</Menu.Button>
				<Menu.Dropdown>
					<Menu.Item>Home</Menu.Item>
					<Menu.Item>About</Menu.Item>
					<Menu.Item>Contact</Menu.Item>
					<Menu.Item>Blog</Menu.Item>
				</Menu.Dropdown>
			</Menu>
			<br />

			<Toggle>
				<Toggle.Button>
					<Toggle.Display>
						{(on) => {
							return <div className={`box ${on && "filled"}`}></div>;
						}}
					</Toggle.Display>
				</Toggle.Button>
			</Toggle>
		</>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
