/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"Dark-Blue-intro-and-email-sign-up-background": "hsl(217, 28%, 15%)",
				"Dark-Blue-main-background": "hsl(218, 28%, 13%)",
				"Dark-Blue-footer-background": "hsl(216, 53%, 9%)",
				"Dark-Blue-testimonials-background": "hsl(219, 30%, 18%)",
				"custom-cyan": "hsl(176, 68%, 64%)",
				"custom-blue": "hsl(198, 60%, 50%)",
				"custom-light-gred": "hsl(0, 100%, 63%)",
			},
		},
	},
	plugins: [],
}
