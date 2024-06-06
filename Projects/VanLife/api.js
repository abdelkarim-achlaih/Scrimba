export async function getVans() {
	const req = await fetch("/api/vans");
	if (!req.ok) {
		console.log("error from api file");
		throw {
			message: "Failed to fetch vans",
			statusText: req.statusText,
			status: req.status,
		};
	}
	const response = await req.json();
	return response.vans;
}
