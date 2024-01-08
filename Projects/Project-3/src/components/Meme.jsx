import memesData from "../memesData";

export default function Meme() {
	return (
		<main>
			<div action="" className="meme">
				<div className="inputs">
					<div className="input-field">
						<label htmlFor="top">Top text</label>
						<input type="text" name="top" id="top" placeholder="Shut up" />
					</div>
					<div className="input-field">
						<label htmlFor="bottom">Bottom text</label>
						<input
							type="text"
							name="bottom"
							id="bottom"
							placeholder="And take my money"
						/>
					</div>
				</div>
				<input type="submit" value="Get a new meme image  🖼" />
			</div>
		</main>
	);
}
