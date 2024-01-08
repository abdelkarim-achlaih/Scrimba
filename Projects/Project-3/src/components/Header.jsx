import logo from "../../public/images/Troll Face.png";
export default function Header() {
	return (
		<header>
			<div className="logo">
				<img src={logo} alt="" />
				<h2>Meme Generator</h2>
			</div>
			<nav>
				<ul>
					<li>React Course - Project 3</li>
				</ul>
			</nav>
		</header>
	);
}
