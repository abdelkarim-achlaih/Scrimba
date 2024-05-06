import Die from "./components/Die";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
	const [dice, setDice] = useState(() => {
		return allNewDice();
	});

	const diceToRender = dice.map((die, i) => (
		<Die
			key={die.id}
			value={die.value}
			isHeld={die.isHeld}
			holdDice={() => {
				holdDice(die.id);
			}}
		/>
	));
	function generateNewDie() {
		const max = 6;
		const min = 1;
		return {
			value: Math.floor(Math.random() * (max - min + 1) + min),
			isHeld: false,
			id: nanoid(),
		};
	}
	function allNewDice() {
		let numbers = [];
		const arrayLength = 10;
		for (let i = 0; i < arrayLength; i++) {
			numbers.push(generateNewDie());
		}
		return numbers;
	}
	function rollDice() {
		setDice((prevDice) =>
			prevDice.map((die) => (!die.isHeld ? generateNewDie() : die))
		);
	}
	function holdDice(id) {
		setDice((prevDice) =>
			prevDice.map((die) =>
				die.id === id ? { ...die, isHeld: !die.isHeld } : die
			)
		);
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
