import React from "react";
import { Link } from "react-router-dom";

export default function Van({ id, imageUrl, name, type, price }) {
	return (
		<div className="van-tile">
			<Link
				to={`/vans/${id}`}
				aria-label={`View details for ${name}, priced at $${price} per day`}
			>
				<img src={imageUrl} alt={`Image of ${name}`} />
				<div className="van-info">
					<h3>{name}</h3>
					<p>
						${price}
						<span>/day</span>
					</p>
				</div>
				<i className={`van-type ${type} selected`}>{type}</i>
			</Link>
		</div>
	);
}