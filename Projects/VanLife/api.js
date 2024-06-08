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

export async function loginUser(creds) {
	const req = await fetch("/api/login", {
		method: "post",
		body: JSON.stringify(creds),
	});

	const data = await req.json();

	if (!req.ok) {
		throw {
			message: data.message,
			statusText: req.statusText,
			status: req.status,
		};
	}

	return data;
}
