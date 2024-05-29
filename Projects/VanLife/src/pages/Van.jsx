import React from "react";

export default function Van(props) {
	return (
		<div className="van">
			<img src={props.imageUrl} width="100" alt="" />
			<div className="name">{props.name}</div>
			<div className="price">{props.price}</div>
			<div className="type">{props.type}</div>
		</div>
	);
}
