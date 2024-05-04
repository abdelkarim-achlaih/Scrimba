import Die from "./components/Die";
import { useState } from "react";

function App() {
	const [dice, setDice] = useState(() => {
		return allNewDice();
	});
	const diceToRender = dice.map((die, i) => <Die key={i} value={die} />);
	function allNewDice() {
		let numbers = [];
		const max = 6;
		const min = 1;
		const arrayLength = 10;
		for (let i = 0; i < arrayLength; i++) {
			numbers.push(Math.floor(Math.random() * (max - min + 1) + min));
		}
		return numbers;
	}
	function rollDice() {
		setDice(allNewDice());
	}
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
					<div className="dies">{diceToRender}</div>
					<button onClick={rollDice}>Roll</button>
				</div>
			</div>
		</main>
	);
}

export default App;
