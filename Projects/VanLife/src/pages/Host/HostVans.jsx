import React from "react";
import HostVan from "./HostVan";
import { useLoaderData, defer, Await } from "react-router-dom";
import { getVans } from "../../../api";
import { requireAuth } from "../../../utils";

export async function loader({ request }) {
	await requireAuth(request);
	return defer({ hostVans: getVans("host/vans") });
}

export default function HostVans() {
	const loaderData = useLoaderData();

	function renderAwaitedLayout(hostVans) {
		const hostVanElements = hostVans.map((hostVan) => (
			<HostVan key={hostVan.id} {...hostVan} />
		));
		return (
			<div className="host-vans-list">
				<section>{hostVanElements}</section>
			</div>
		);
	}
	return (
		<section>
			<h1 className="host-vans-title">Your listed vans</h1>
			<React.Suspense fallback={<h2>Loading Host Vans...</h2>}>
				<Await resolve={loaderData.hostVans}>{renderAwaitedLayout}</Await>
			</React.Suspense>
		</section>
	);
}
