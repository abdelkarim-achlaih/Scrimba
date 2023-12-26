/* eslint-disable react/prop-types */
import Star from "../assets/Star 1.png";
// import CardPhoto from "../assets/image 12.png";
export default function Card(props) {
	let badge;
	if (props.item.openSpots === 0) {
		badge = "SOLD OUT";
	} else if (props.item.location === "Online") {
		badge = "ONLINE";
	}
	return (
		<div className="card">
			{badge && <div className="card-badge">{badge}</div>}
			<img src={"src/assets/" + props.item.coverImg} alt="" />
			<div className="card-infos">
				<div className="stats">
					<img src={Star} alt="" />
					<span>{props.item.stats.rating}</span>
					<span>({props.item.stats.reviewCount}) • </span>
					<span>{props.item.location}</span>
				</div>
				<p>{props.item.title}</p>
				<p>
					<span>From ${props.item.price}</span> / person
				</p>
			</div>
		</div>
	);
}
