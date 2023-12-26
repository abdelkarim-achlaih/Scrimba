import Bg from "../../public/assets/Group 77.png";
export default function Hero() {
	return (
		<div className="hero">
			<div className="img">
				<img src={Bg} alt="" />
			</div>
			<h1>Online Experiences</h1>
			<p>
				Join unique interactive activities led by one-of-a-kind hosts—all
				without leaving home.
			</p>
		</div>
	);
}
