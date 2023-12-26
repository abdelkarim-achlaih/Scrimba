/* eslint-disable react/prop-types */
import Star from "../assets/Star 1.png";
// import CardPhoto from "../assets/image 12.png";
export default function Card(props) {
	let badge;
	if (props.openSpots === 0) {
		badge = "SOLD OUT";
	} else if (props.country === "Online") {
		badge = "ONLINE";
	}
	return (
		<div className="card">
			{badge && <div className="card-badge">{badge}</div>}
			<img src={"src/assets/" + props.img} alt="" />
			<div className="card-infos">
				<div className="stats">
					<img src={Star} alt="" />
					<span>{props.rating}</span>
					<span>({props.reviewCount}) • </span>
					<span>{props.country}</span>
				</div>
				<p>{props.title}</p>
				<p>
					<span>From ${props.price}</span> / person
				</p>
			</div>
		</div>
	);
}
