import OpenAI from "openai";
import { apikey } from "./apikey.js";

const openai = new OpenAI({
	dangerouslyAllowBrowser: true,
	apiKey: apikey,
});

async function AITranslate(text, lang) {
	buttonloader();
	const response = await openai.chat.completions.create({
		model: "gpt-5-nano",
		messages: [
			{
				role: "system",
				content: "You are a professional multilingual translator",
			},
			{
				role: "user",
				content: `Translate the following text to ${lang}:\n\n${text}`,
			},
		],
	});
	renderOutput(response.choices[0].message.content);
}
function buttonloader() {
	if (loaderBtn.style.display == "none") {
		loaderBtn.style.display = "block";
		translateBtn.style.display = "none";
	} else {
		loaderBtn.style.display = "none";
		translateBtn.style.display = "block";
	}
}
function renderOutput(translationOutput) {
	buttonloader();
	translation.textContent = translationOutput;
	translatorForm.style.display = "none";
	output.style.display = "block";
}

const inputText = document.getElementById("inputText");
const translateBtn = document.getElementById("translateBtn");
const loaderBtn = document.getElementById("loaderBtn");
const translatorForm = document.getElementById("translator");
const orginalText = document.getElementById("orginalText");
const translation = document.getElementById("translation");
const startOverBtn = document.getElementById("startOver");
const output = document.querySelector(".output");

output.style.display = "none";

translatorForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const text = inputText.value;
	const lang = document.querySelector('input[name="language"]:checked').value;
	const values = {
		inputText: text,
		language: lang,
	};
	orginalText.textContent = values.inputText;
	AITranslate(values.inputText, values.language);
});
startOverBtn.addEventListener("click", () => {
	translatorForm.style.display = "block";
	output.style.display = "none";
	inputText.value = "";
});
