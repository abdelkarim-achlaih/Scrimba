import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./components/Menu/index";
import Star from "./components/Star";
import Toggle from "./components/Toggle/index";
import Accordion from "./components/Accordion/index";

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
						{(on) => <div className={`box ${on && "filled"}`}></div>}
					</Toggle.Display>
				</Toggle.Button>
			</Toggle>

			<br />
			<Accordion>
				<Accordion.Section
					onOpen={() => console.log("Accordion Opened/closed")}
				>
					<Accordion.Title>title</Accordion.Title>
					<Accordion.Body>bodyyyyyyyyyyyyy</Accordion.Body>
				</Accordion.Section>
				<Accordion.Section>
					<Accordion.Title>title</Accordion.Title>
					<Accordion.Body>bodyyyyyyyyyyyyy</Accordion.Body>
				</Accordion.Section>
			</Accordion>
			<Accordion>
				<Accordion.Section
					onOpen={() => console.log("Accordion Opened/closed")}
				>
					<Accordion.Title>title</Accordion.Title>
					<Accordion.Body>bodyyyyyyyyyyyyy</Accordion.Body>
				</Accordion.Section>
				<Accordion.Section>
					<Accordion.Title>title</Accordion.Title>
					<Accordion.Body>bodyyyyyyyyyyyyy</Accordion.Body>
				</Accordion.Section>
			</Accordion>
		</>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
