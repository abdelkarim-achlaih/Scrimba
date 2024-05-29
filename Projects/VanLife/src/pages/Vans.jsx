import React from "react";
import Van from "./Van";

export default function Vans() {
	const [vans, setVans] = React.useState([]);
	React.useEffect(() => {
		async function getData() {
			const req = await fetch("/api/vans");
			const response = await req.json();
			setVans(response.vans);
		}
		getData();
	}, []);
	const vanElements = vans.map((van) => <Van key={van.id} {...van} />);
	return (
		<div className="van-list-container">
			<h1>Explore our van options</h1>
			<div className="van-list">{vanElements}</div>
		</div>
	);
}
