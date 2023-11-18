import logo from "../assets/reactjs-icon.png";
export default function Navbar() {
	return (
		<nav>
			<div className="logo">
				<div className="nav">
					<img src={logo} alt="" />
					<h2>ReactFacts</h2>
				</div>
			</div>
			<h2>React Course - Project 1</h2>
		</nav>
	);
}
