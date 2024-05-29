import React from "react";

export default function Van({ imageUrl, name, type, price }) {
	return (
		<div className="van-tile">
			<img src={imageUrl} />
			<div className="van-info">
				<h3>{name}</h3>
				<p>
					${price}
					<span>/day</span>
				</p>
			</div>
			<i className={`van-type ${type} selected`}>{type}</i>
		</div>
	);
}
