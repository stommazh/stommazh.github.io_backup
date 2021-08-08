import preprocess from 'svelte-preprocess';
import WindiCSS from 'vite-plugin-windicss'
import staticSite from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [preprocess()],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: staticSite(),
		vite: () => ({
			plugins: [
				WindiCSS.default({
					configPath: './windi.config.js'
				})
			]
		})
	}
};

export default config;
