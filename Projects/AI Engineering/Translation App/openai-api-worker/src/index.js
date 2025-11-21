/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import OpenAI from 'openai';

const corsHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'POST, OPTIONS',
	'Access-Control-Allow-Headers': 'Content-Type',
};

const baseURL = 'https://gateway.ai.cloudflare.com/v1/00beaa1b1f7589917ef56e2045300788/translate/openai';

export default {
	async fetch(request, env, ctx) {
		// Handle CORS preflight requests
		if (request.method === 'OPTIONS') {
			return new Response(null, { headers: corsHeaders });
		}

		if (request.method !== 'POST') {
			return new Response('Method Not Allowed', { status: 405, headers: corsHeaders });
		}

		// const openai = new OpenAI({ apiKey: env.OPENAI_API_KEY });
		const openai = new OpenAI({ apiKey: env.OPENAI_API_KEY, baseURL });
		//OpenAI API Request
		try {
			const messages = await request.json();
			const chatCompletion = await openai.chat.completions.create({
				model: 'gpt-5-nano',
				messages,
			});
			const response = chatCompletion.choices[0].message;
			console.log(response);
			return new Response(JSON.stringify(response), { headers: corsHeaders });
		} catch (e) {
			return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: corsHeaders });
		}
	},
};
