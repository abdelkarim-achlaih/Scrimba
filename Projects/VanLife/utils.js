import { redirect } from "react-router-dom";
export async function requireAuth() {
	const isLoggedIn = window.localStorage.getItem("loggedIn") || false;
	if (!isLoggedIn) {
		// throw redirect("/login");S
		// This block of code is just to make React router to work with miragejs
		const response = redirect("/login?message=You must log in first.");
		response.body = true; // It's silly, but it works
		throw response;
	}
	return null; //Loader function needs always something to return
}
