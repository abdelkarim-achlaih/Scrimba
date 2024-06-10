import React from "react";
import { useLoaderData, Form, redirect, useActionData } from "react-router-dom";
import { loginUser } from "../../api";

export function loader({ request }) {
	return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
	const formData = await request.formData();
	const email = formData.get("email");
	const password = formData.get("password");

	try {
		const data = await loginUser({ email, password });
		console.log(data);

		window.localStorage.setItem("loggedIn", true);

		const response = redirect("/host"); //Just to make redirect work with miragejs
		response.body = true;
		throw response;
	} catch (err) {
		return err;
	}
}

export default function Login() {
	const [status, setStatus] = React.useState("idle");
	const error = useActionData();

	const message = useLoaderData();

	return (
		<div className="login-container">
			<h1>Sign in to your account</h1>
			{message && <h3 className="red">{message}</h3>}
			{error && <h3 className="red">{error.message}</h3>}
			<Form method="POST" className="login-form" replace>
				<input name="email" type="email" placeholder="Email address" />
				<input name="password" type="password" placeholder="Password" />
				<button disabled={status === "submitting"}>
					{status === "idle" ? "Log in" : "Logging In..."}
				</button>
			</Form>
		</div>
	);
}
