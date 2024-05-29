import React from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
	const [van, setVan] = React.useState({});

	const params = useParams();

	React.useEffect(() => {
		async function getData() {
			const req = await fetch(`/api/vans/${params.id}`);
			const response = await req.json();
			setVan(response.vans);
		}
		getData();
	}, []);

	return (
		<div className="van-tile">
			<img src={van.imageUrl} />
			<div className="van-info">
				<h3>{van.name}</h3>
				<p>
					${van.price}
					<span>/day</span>
				</p>
			</div>
			<i className={`van-type ${van.type} selected`}>{van.type}</i>
		</div>
	);
}
