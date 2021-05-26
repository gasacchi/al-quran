module.exports = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		colors: {
			"al-white": " #FFFFFF",
			"al-black": "#0D070D",
			"al-pink": {
				DEFAULT: "#E87A87",
				light: "#F39F8C",
			},
			"al-blue": "#154666",
			"al-grey": "#67879C"
		}
	},
	plugins: [],
};
