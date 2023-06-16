/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-color": "var(--primary-color)",
				"secondary-bg": "var(--secondary-bg)",
				"ternary-bg": "var(--ternary-bg)",
				"white-color": "var(--white-color)",
				"light-bg-color": "var(--light-bg-color)",
			},
		},
	},
	plugins: [require("daisyui")],
};

