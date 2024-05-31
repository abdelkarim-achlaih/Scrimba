import React from "react";
import { Link } from "react-router-dom";

export default function HostVan({ id, imageUrl, name, price }) {
	return (
		<Link
			to={`${id}`}
			className="host-van-link-wrapper"
			aria-label={`View details for ${name}, priced at $${price} per day`}
		>
			<div className="host-van-single" key={id}>
				<img src={imageUrl} alt={`Photo of ${name}`} />
				<div className="host-van-info">
					<h3>{name}</h3>
					<p>${price}/day</p>
				</div>
			</div>
		</Link>
	);
}
