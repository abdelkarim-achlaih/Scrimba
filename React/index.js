// import React from "react";
// import ReactDOM from "react-dom";

// const page = (
// 	<div>
// 		<img src="./react-logo.png" width="40px" />
// 		<h1>Fun facts about React</h1>
// 		<ul>
// 			<li>Was first released in 2013</li>
// 			<li>Was originally created by Jordan Walke</li>
// 			<li>Has well over 100K stars on GitHub</li>
// 			<li>Is maintained by Facebook</li>
// 			<li>Powers thousands of enterprise apps, including mobile apps</li>
// 		</ul>
// 	</div>
// );

// ReactDOM.render(page, document.getElementById("root"));

function Header() {
	return (
		<header>
			<nav>
				<img src="./react-logo.png" width="40px" />
			</nav>
		</header>
	);
}
function Footer() {
	return (
		<footer>
			<small>© 2021 Ziroll development. All rights reserved.</small>
		</footer>
	);
}
function MainContent() {
	return (
		<>
			<h1>Reasons I'm excited to learn React</h1>
			<ol>
				<li>
					It's a popular library, so I'll be able to fit in with the cool kids!
				</li>
				<li>I'm more likely to get a job as a developer if I know React</li>
			</ol>
		</>
	);
}
function Page() {
	return (
		<div>
			<Header />
			<MainContent />
			<Footer />
		</div>
	);
}

ReactDOM.render(<Page />, document.getElementById("root"));
