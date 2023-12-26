import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
	const elements = data.map((item) => {
		return <Card key={item.id} item={item} />;
	});
	return (
		<>
			<Navbar />
			<Hero />
			<div className="cards-container">{elements}</div>
		</>
	);
}
