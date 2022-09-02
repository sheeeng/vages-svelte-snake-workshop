import adapter from "@sveltejs/adapter-auto";
import { mdsvex } from "mdsvex";
import sveltePreprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
	},

	// Add support for mdsvex
	extensions: [".svelte", ".svx", ".md"],
	preprocess: [mdsvex(), sveltePreprocess()],
};

export default config;
