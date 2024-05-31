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
						<div className="host-van-detail-layout-container">
							<div className="host-van-detail">
								<img src={van.imageUrl} />
								<div className="host-van-detail-info-text">
									<i className={`van-type van-type-${van.type}`}>
										{van.type}
									</i>
									<h3>{van.name}</h3>
									<h4>${van.price}/day</h4>
								</div>
							</div>
						</div>
						<nav>
							<NavLink to={"."}>Details</NavLink>
							<NavLink to={`pricing`}>Pricing</NavLink>
							<NavLink to={`photos`}>Photos</NavLink>
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
