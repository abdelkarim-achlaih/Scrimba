import Star from "../assets/Star 1.png";
// import CardPhoto from "../assets/image 12.png";
export default function Card(props) {
	return (
		<div className="card">
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
