import Die from "./components/Die";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
	const [dice, setDice] = useState(() => {
		return allNewDice();
	});

	const [tenzies, setTenzies] = useState(false);

	useEffect(() => {
		// Using Array.prototype.reduce()

		// const winRuleOne = dice.reduce((final, die) => die.isHeld * final, true);
		// const winRuleTwo =
		// 	dice[0].value ** 10 === dice.reduce((final, die) => die.value * final, 1);

		// Using Array.prototype.every()
		const winRuleOne = dice.every((die) => die.isHeld); //Returns bool based on a condition was verified by all elements of the array or not
		const winRuleTwo = dice.every((die) => die.value === dice[0].value);
		if (winRuleOne && winRuleTwo) {
			setTenzies(true);
		}
	}, [dice]);

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
		if (tenzies) {
			setDice(allNewDice());
			setTenzies(false);
		} else {
			setDice((prevDice) =>
				prevDice.map((die) => (!die.isHeld ? generateNewDie() : die))
			);
		}
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
			{tenzies && <Confetti />}
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
					<button onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
				</div>
			</div>
		</main>
	);
}

export default App;
