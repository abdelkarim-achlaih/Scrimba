import http from "node:http";

const PORT = 8000;

const server = http.createServer(async (req, res) => {
	res.write("This is some data \n");
	res.write("This is some more data \n");
	res.end("This is from the server", "utf8", () => console.log("response end")); //to end the stream

	const destinations = await getDataFromDB();
	req.url;
	req.method;

	const urlObj = new URL(req.url, `http://${req.headers.host}`);

	const queryObj = Object.fromEntries(urlObj.searchParams);

	if (urlObj.pathname === "/api" && req.method === "GET") {
		// to handle query params
		let filteredData = destinations;
		res.setHeader("Content-Type", "application/json");
		res.statusCode = 200;
		//These lines of code can be written in one line as below using this function
		res.writeHead(200, {
			"Content-Type": "text/html",
			"Access-Control-Allow-Methods": "POST",
		});
		res.end(JSON.stringify(filteredData));
	} else if (req.url.startsWith("/api/continent") && req.method === "GET") {
		const continent = req.url.split("/").pop();
		//...
	} else if (req.url.startsWith("/api/country") && req.method === "GET") {
		const country = req.url.split("/").pop();
		//...
	} else {
		res.setHeader("Content-Type", "application/json");
		res.setHeader("Access-Control-Allow-Origin", "*"); // CORS policy: allow all origins, that means any domain can access this resource
		res.setHeader("Access-Control-Allow-Origin", "http://example.com"); // allow only example.com to access this resource
		res.setHeader("Access-Control-Allow-Methods", "GET"); // allow only GET requests
		res.statusCode = 404;
		res.end(
			JSON.stringify({
				error: "not found",
				message: "The requested route does not exist",
			})
		);
	}
});

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`)); //starts the server
