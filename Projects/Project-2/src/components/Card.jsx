import Star from "../assets/Star 1.png";
import CardPhoto from "../assets/image 12.png";
export default function Navbar() {
	return (
		<div className="card">
			<img src={CardPhoto} alt="" />
			<div className="card-infos">
				<div className="stats">
					<img src={Star} alt="" />
					<span>5.0</span>
					<span>(6) • </span>
					<span>USA</span>
				</div>
				<p>Life lessons with Katie Zaferes</p>
				<p>
					<span>From $136</span> / person
				</p>
			</div>
		</div>
	);
}
