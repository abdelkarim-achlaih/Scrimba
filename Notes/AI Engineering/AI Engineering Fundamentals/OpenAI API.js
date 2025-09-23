import OpenAI from "openai";

const openai = new OpenAI({
	dangerouslyAllowBrowser: true,
});
messages = [
	{
		role: "system",
		content: "",
	},
	{
		role: "user",
		content: "",
	}, 
];

const response = await openai.chat.completions.create({//object settings
	model: "gpt-4",
	messages,
	max_tokens: 16, // default: inf
	temprature: 1.1, // default: 1 (1.1 is good) 0: less daring, 2: more daring
	stop: ["3."], // default: null, the model stops when encountars this string, we can put multiple stop sequences in an array
    frequency_penalty: 0.5, // default: 0, between -2.0 and 2.0, positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
});
console.log(response.choices[0].message.content);
