/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		logs: false,
		themes: ['forest']
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
