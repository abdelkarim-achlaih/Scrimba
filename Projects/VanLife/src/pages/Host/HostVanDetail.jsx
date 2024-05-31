import React from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";

export default function HostVanDetail() {
	const [van, setVan] = React.useState(null);

	const params = useParams();

	React.useEffect(() => {
		async function getData() {
			const req = await fetch(`/api/host/vans/${params.id}`);
			const response = await req.json();
			setVan(response.vans);
		}
		getData();
	}, [params.id]);

	return (
		<>
			<div className="van-detail-container">
				{van ? (
					<>
						<div>
							<img src={van.imageUrl} />
							<i className={`van-type ${van.type} selected`}>{van.type}</i>
							<h2>{van.name}</h2>
							<span>${van.price}</span>/day
						</div>
						<nav>
							<NavLink to={`/host/vans/${params.id}`}>Details</NavLink>
							<NavLink to={`/host/vans/${params.id}/pricing`}>Pricing</NavLink>
							<NavLink to={`/host/vans/${params.id}/photos`}>Photos</NavLink>
						</nav>
						<Outlet />
					</>
				) : (
					<h2>Loading...</h2>
				)}
			</div>
			{/* <Link to="/vans/5">See others</Link> */}
		</>
	);
}
