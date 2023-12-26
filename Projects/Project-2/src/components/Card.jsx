/* eslint-disable react/prop-types */
import Star from "../../public/assets/Star 1.png";
// import CardPhoto from "../assets/image 12.png";
export default function Card(props) {
	let badge;
	if (props.openSpots === 0) {
		badge = "SOLD OUT";
	} else if (props.location === "Online") {
		badge = "ONLINE";
	}
	return (
		<div className="card">
			{badge && <div className="card-badge">{badge}</div>}
			<img src={"../../public/assets/" + props.coverImg} alt="" />
			<div className="card-infos">
				<div className="stats">
					<img src={Star} alt="" />
					<span>{props.stats.rating}</span>
					<span>({props.stats.reviewCount}) • </span>
					<span>{props.location}</span>
				</div>
				<p>{props.title}</p>
				<p>
					<span>From ${props.price}</span> / person
				</p>
			</div>
		</div>
	);
}
