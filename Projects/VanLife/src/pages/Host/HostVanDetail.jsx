import React from "react";
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getVan } from "../../../api";
import { requireAuth } from "../../../utils";

export async function loader({ params, request }) {
	await requireAuth(request);
	return getVan(params.id);
}

export default function HostVanDetail() {
	const van = useLoaderData();

	return (
		<section>
			<Link to=".." relative="path" className="back-button">
				&larr; <span>Back to all vans</span>
			</Link>
			<div className="host-van-detail-layout-container">
				<div className="host-van-detail">
					<img src={van.imageUrl} />
					<div className="host-van-detail-info-text">
						<i className={`van-type van-type-${van.type}`}>{van.type}</i>
						<h3>{van.name}</h3>
						<h4>${van.price}/day</h4>
					</div>
				</div>
				<nav className="host-van-detail-nav">
					<NavLink
						className={({ isActive }) => (isActive ? "active" : "")}
						to="."
						end
					>
						Details
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? "active" : "")}
						to="pricing"
					>
						Pricing
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? "active" : "")}
						to="photos"
					>
						Photos
					</NavLink>
				</nav>
				<Outlet context={{ van }} />
			</div>
		</section>
	);
}
