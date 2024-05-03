import { useState } from "react";

function App() {
	return (
		<main>
			<div className="container">
				<div className="copy">
					<h1>Tenzies</h1>
					<p>
						Roll until all dice are the same. Click each die to freeze it at its
						current value between rolls.
					</p>
				</div>
				<div className="game">
					<ul>
						<li className="number active">5</li>
						<li className="number">5</li>
						<li className="number">5</li>
						<li className="number active">5</li>
						<li className="number">5</li>
					</ul>
					<ul>
						<li className="number">6</li>
						<li className="number">6</li>
						<li className="number">6</li>
						<li className="number active">6</li>
						<li className="number">6</li>
					</ul>
					<button>Roll</button>
				</div>
			</div>
		</main>
	);
}

export default App;
