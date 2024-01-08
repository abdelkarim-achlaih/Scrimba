import memesData from "../memesData";
import React from "react";

export default function Meme() {
	const data = memesData.data.memes;
	const [memeUrl, updateMemeUrl] = React.useState("");
	function generateMeme() {
		const rand = Math.floor(Math.random() * data.length);
		updateMemeUrl(data[rand].url);
	}
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
				<button onClick={generateMeme}>Get a new meme image 🖼</button>
			</div>
			<img src={memeUrl} alt="" />
		</main>
	);
}
