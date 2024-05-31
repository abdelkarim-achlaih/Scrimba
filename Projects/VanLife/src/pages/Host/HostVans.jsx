import React from "react";
import HostVan from "./HostVan";
import { Link } from "react-router-dom";

export default function HostVans() {
	const [hostVans, setHostVans] = React.useState([]);
	React.useEffect(() => {
		async function getData() {
			const req = await fetch(`/api/host/vans`);
			const response = await req.json();
			setHostVans(response.vans);
		}
		getData();
	}, []);
	const hostVanElements = hostVans.map((hostVan) => (
		<HostVan key={hostVan.id} {...hostVan} />
	));

	return (
		<section>
			<h1 className="host-vans-title">Your listed vans</h1>
			<div className="host-vans-list">
				{hostVans.length > 0 ? (
					<section>{hostVanElements}</section>
				) : (
					<h2>Loading...</h2>
				)}
			</div>
		</section>
	);
}
