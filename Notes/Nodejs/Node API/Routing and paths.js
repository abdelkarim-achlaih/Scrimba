import http from "node:http";
import path from "node:path"; // we use it beacuse each OS has different way of writing paths
import fs from "node:fs/promises"; // to work with file system using promises

const PORT = 8000;

const __dirname = import.meta.dirname; // to get the current directory path

console.log("Directory Name: ", __dirname);
console.log("Current Working Directory: ", process.cwd()); //path module starts from this CWD, not from the file path(like the case we're excuting this code from subfolder)

console.log(
	"abs Path to index.html: ",
	path.join(__dirname, "public", "index.html")
);
console.log("rel Path to index.html: ", path.join("public", "index.html"));

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/html");
	res.end();
});

// server.listen(PORT, () => console.log("connected on port 8000"));
