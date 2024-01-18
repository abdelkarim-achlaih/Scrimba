import React from "react";

export default function Meme() {
	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});

	const [allMemes, setAllMemes] = React.useState({});

	React.useEffect(() => {
		// async () => {
		// 	const resp = await fetch("https://api.imgflip.com/get_memes");
		// 	const data = await resp.json();
		// 	console.log(data);
		// 	setAllMemes(data.data.memes);
		// };
		fetch("https://api.imgflip.com/get_memes")
			.then((res) => res.json())
			.then((data) => setAllMemes(data.data.memes));
		console.log("data fetched success");
	}, []);

	function generateMeme() {
		const rand = Math.floor(Math.random() * allMemes.length);
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: allMemes[rand].url,
		}));
	}
	function handleChange(event) {
		const { name, value } = event.target;
		setMeme((prevMeme) => ({
			...prevMeme,
			[name]: value,
		}));
	}
	return (
		<main>
			<div action="" className="meme">
				<div className="inputs">
					<div className="input-field">
						<label htmlFor="top">Top text</label>
						<input
							type="text"
							name="topText"
							id="top"
							placeholder="Shut up"
							onChange={handleChange}
							value={meme.topText}
						/>
					</div>
					<div className="input-field">
						<label htmlFor="bottom">Bottom text</label>
						<input
							type="text"
							name="bottomText"
							id="bottom"
							placeholder="And take my money"
							onChange={handleChange}
							value={meme.bottomText}
						/>
					</div>
				</div>
				<button onClick={generateMeme}>Get a new meme image 🖼</button>
			</div>
			<div className="meme">
				<img src={meme.randomImage} className="meme--image" />
				<h2 className="meme--text top">{meme.topText}</h2>
				<h2 className="meme--text bottom">{meme.bottomText}</h2>
			</div>
		</main>
	);
}
