import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
	const elements = data.map((card) => {
		return (
			<Card
				key={card.id}
				img={card.coverImg}
				rating={card.stats.rating}
				reviewCount={card.stats.reviewCount}
				country={card.location}
				title={card.title}
				price={card.price}
			/>
		);
	});
	return (
		<>
			<Navbar />
			<Hero />
			<div className="cards-container">{elements}</div>
		</>
	);
}
