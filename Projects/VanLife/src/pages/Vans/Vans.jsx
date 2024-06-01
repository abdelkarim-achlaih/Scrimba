import React from "react";
import Van from "./Van";
import { useSearchParams, Link } from "react-router-dom";

export default function Vans() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [vans, setVans] = React.useState([]);

	const typeFilter = searchParams.get("type");

	React.useEffect(() => {
		async function getData() {
			const req = await fetch("/api/vans");
			const response = await req.json();
			setVans(response.vans);
		}
		getData();
	}, []);

	const displayedVans = typeFilter
		? vans.filter((van) => van.type === typeFilter)
		: vans;

	const vanElements = displayedVans.map((van) => <Van key={van.id} {...van} />);
	return (
		<div className="van-list-container">
			<h1>Explore our van options</h1>
			<div className="van-list-filter-buttons">
				<Link className="van-type simple" to="?type=simple">
					Simple
				</Link>
				<Link className="van-type luxury" to="?type=luxury">
					Luxury
				</Link>
				<Link className="van-type rugged" to="?type=rugged">
					Rugged
				</Link>
				<Link className="van-type clear-filters" to=".">
					Clear
				</Link>
			</div>
			<div className="van-list">{vanElements}</div>
		</div>
	);
}
