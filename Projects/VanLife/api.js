export async function getVans(folder, id) {
	//folder = vans || host/vans
	const base = `/api/${folder}`;
	const url = id ? `${base}/${id}` : base;
	const req = await fetch(url);
	if (!req.ok) {
		throw {
			message: "Failed to fetch vans",
			statusText: req.statusText,
			status: req.status,
		};
	}
	const response = await req.json();
	return response.vans;
}
