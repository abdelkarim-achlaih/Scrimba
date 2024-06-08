import React from "react";
import HostVan from "./HostVan";
import { Link, useLoaderData } from "react-router-dom";
import { getVans } from "../../../api";

export function loader() {
	return getVans("host/vans");
}

export default function HostVans() {
	const hostVans = useLoaderData();
	const hostVanElements = hostVans.map((hostVan) => (
		<HostVan key={hostVan.id} {...hostVan} />
	));
	return (
		<section>
			<h1 className="host-vans-title">Your listed vans</h1>
			<div className="host-vans-list">
				<section>{hostVanElements}</section>
			</div>
		</section>
	);
}
