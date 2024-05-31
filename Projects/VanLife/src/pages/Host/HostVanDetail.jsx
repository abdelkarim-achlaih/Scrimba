import React from "react";
import { Link, NavLink, useParams, Outlet } from "react-router-dom";

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
			{van ? (
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
						<Outlet />
					</div>
				</section>
			) : (
				<h2>Loading...</h2>
			)}
			{/* <Link to="/vans/5">See others</Link> */}
		</>
	);
}
