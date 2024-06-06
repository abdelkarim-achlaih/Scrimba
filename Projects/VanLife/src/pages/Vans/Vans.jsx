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

	// function genNewSPString(key, value) {
	// 	const sp = new URLSearchParams(searchParams);
	// 	value === null ? sp.delete(key) : sp.set(key, value);
	// 	return `?${sp.toString()}`;
	// }
	function handleFilterChange(key, value) {
		setSearchParams((prevSearchParams) => {
			value === null
				? prevSearchParams.delete(key)
				: prevSearchParams.set(key, value);
			return prevSearchParams;
		});
	}

	return (
		<div className="van-list-container">
			<h1>Explore our van options</h1>
			<div className="van-list-filter-buttons">
				{/* <Link className="van-type simple" to={genNewSPString("type", "simple")}>
					Simple
				</Link>
				<Link className="van-type luxury" to={genNewSPString("type", "luxury")}>
					Luxury
				</Link>
				<Link className="van-type rugged" to={genNewSPString("type", "rugged")}>
					Rugged
				</Link>
				<Link
					className="van-type clear-filters"
					to={genNewSPString("type", null)}
				>
					Clear
				</Link> */}
				<button
					className={`van-type simple${
						typeFilter === "simple" ? " selected" : ""
					}`}
					onClick={() => handleFilterChange("type", "simple")}
				>
					Simple
				</button>
				<button
					className={`van-type luxury${
						typeFilter === "luxury" ? " selected" : ""
					}`}
					onClick={() => handleFilterChange("type", "luxury")}
				>
					Luxury
				</button>
				<button
					className={`van-type rugged${
						typeFilter === "rugged" ? " selected" : ""
					}`}
					onClick={() => handleFilterChange("type", "rugged")}
				>
					Rugged
				</button>
				{typeFilter && (
					<button
						className="van-type clear-filters"
						onClick={() => handleFilterChange("type", null)}
					>
						Clear
					</button>
				)}
			</div>
			<div className="van-list">{vanElements}</div>
		</div>
	);
}
