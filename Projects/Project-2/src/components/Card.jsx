import Star from "../assets/Star 1.png";
import Ellipse from "../assets/Ellipse 6.png";
import CardPhoto from "../assets/image 12.png";
export default function Navbar() {
	return (
		<div className="card">
			<img src={CardPhoto} alt="" />
			<div className="card-infos">
				<div className="infos-line-1">
					<img src={Star} alt="" />
					<span className="rating">5.0</span>
					<span className="gray">
						<span>(6)</span>
						<img src={Ellipse} alt="" /> USA
					</span>
				</div>
				<div className="infos-line-2">Life lessons with Katie Zaferes</div>
				<div className="infos-line-3">
					<span className="price">From $136</span> / person
				</div>
			</div>
		</div>
	);
}
