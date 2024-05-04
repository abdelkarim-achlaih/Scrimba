import Die from "./components/Die";

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
					<div className="row">
						<Die value={1} />
						<Die value={2} />
						<Die value={3} />
						<Die value={4} />
						<Die value={5} />
						<Die value={6} />
					</div>
					<div className="row">
						<Die value={1} />
						<Die value={2} />
						<Die value={3} />
						<Die value={4} />
						<Die value={5} />
						<Die value={6} />
					</div>
					<button>Roll</button>
				</div>
			</div>
		</main>
	);
}

export default App;
