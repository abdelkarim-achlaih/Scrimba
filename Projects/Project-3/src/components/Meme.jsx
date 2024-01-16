import memesData from "../memesData";
import React from "react";

export default function Meme() {
	const data = memesData.data.memes;
	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});
	const [allMemeImages, setAllMemeImages] = React.useState(data);
	function generateMeme() {
		const rand = Math.floor(Math.random() * allMemeImages.length);
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: allMemeImages[rand].url,
		}));
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
			<img src={meme.randomImage} alt="" />
		</main>
	);
}
