import React from "react";
import {
	useLoaderData,
	Form,
	redirect,
	useActionData,
	useNavigation,
} from "react-router-dom";
import { loginUser } from "../../api";

export function loader({ request }) {
	return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
	const formData = await request.formData();
	const email = formData.get("email");
	const password = formData.get("password");
	const pathname =
		new URL(request.url).searchParams.get("redirectTo") || "/host";

	try {
		const data = await loginUser({ email, password });
		console.log(data);

		window.localStorage.setItem("loggedIn", true);
		const response = redirect(pathname);
		response.body = true; //Just to make redirect work with miragejs
		throw response;
	} catch (err) {
		return err;
	}
}

export default function Login() {
	const navigation = useNavigation();
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
				<button disabled={navigation.state === "submitting"}>
					{navigation.state === "idle" ? "Log in" : "Logging In..."}
				</button>
			</Form>
		</div>
	);
}
