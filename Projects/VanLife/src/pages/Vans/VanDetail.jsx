import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";

export default function VanDetail() {
	const [van, setVan] = React.useState(null);

	const params = useParams();

	const { state } = useLocation();

	React.useEffect(() => {
		async function getData() {
			const req = await fetch(`/api/vans/${params.id}`);
			const response = await req.json();
			setVan(response.vans);
		}
		getData();
	}, [params.id]); //Change if we want to rerender this component if we still on the same route but for another van, see the Link all the way down in return

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
				{van ? (
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
				) : (
					<h2>Loading...</h2>
				)}
			</div>
			{/* <Link to="/vans/5">See others</Link> */}
		</>
	);
}
