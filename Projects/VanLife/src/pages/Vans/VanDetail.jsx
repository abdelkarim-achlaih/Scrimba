import React from "react";
import { Link, useLocation, useLoaderData } from "react-router-dom";
import { getVan } from "../../../api";

export function loader({ params }) {
	return getVan(params.id);
}

export default function VanDetail() {
	const van = useLoaderData();

	const { state } = useLocation();

	return (
		<>
			<div className="van-detail-container">
				<Link
					to={state && state.search ? `..?${state.search}` : ".."}
					relative="path"
					className="back-button"
				>
					&larr;{" "}
					<span>
						Back to {state && state.type ? `${state.type}` : "all"} vans
					</span>
				</Link>
				<div className="van-detail">
					<img src={van.imageUrl} />
					<i className={`van-type ${van.type} selected`}>{van.type}</i>
					<h2>{van.name}</h2>
					<p className="van-price">
						<span>${van.price}</span>/day
					</p>
					<p>{van.description}</p>
					<button className="link-button">Rent this van</button>
				</div>
			</div>
		</>
	);
}
