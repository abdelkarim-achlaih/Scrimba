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
	const vansElements = vans.map((van) => <Van key={van.id} {...van} />);
	return <div className="vans">{vansElements}</div>;
}
