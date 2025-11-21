import { defineConfig } from "vite";

export default defineConfig({
	build: {
		outDir: "dist", // will create dist INSIDE the project folder
		emptyOutDir: true,
	},
});
