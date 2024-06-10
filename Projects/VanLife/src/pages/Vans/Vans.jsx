import React from "react";
import Van from "./Van";
import { useSearchParams, useLoaderData, defer, Await } from "react-router-dom";
import { getVans } from "../../../api";

export function loader() {
	return defer({ vans: getVans("vans") });
}

export default function Vans() {
	const [searchParams, setSearchParams] = useSearchParams();

	const typeFilter = searchParams.get("type");

	const loaderData = useLoaderData();

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

			<Await resolve={loaderData.vans}>
				{(vans) => {
					const displayedVans = typeFilter
						? vans.filter((van) => van.type === typeFilter)
						: vans;

					const vanElements = displayedVans.map((van) => (
						<Van
							key={van.id}
							{...van}
							search={{ search: searchParams.toString(), type: typeFilter }}
						/>
					));
					return (
						<>
							<div className="van-list-filter-buttons">
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
						</>
					);
				}}
			</Await>
		</div>
	);
}
