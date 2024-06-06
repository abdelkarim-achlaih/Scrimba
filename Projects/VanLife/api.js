export async function getVans() {
	const req = await fetch("/api/vans");
	const response = await req.json();
	return response;
}
