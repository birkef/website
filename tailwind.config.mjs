import { addIconSelectors } from "@iconify/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				monocraft: ["Monocraft"],
				montserrat: ["Montserrat", "sans-serif"],
				monaradon: ["Monaspace Radon"],
				monakrypton: ["Monaspace Krypton"]
			},
			colors: {
				rosePineMoon: {
					base: "#232136",
					surface: "#2a273f",
					overlay: "#393552",
					muted: "#6e6a86",
					subtle: "#908caa",
					text: "#e0def4",
					love: "#eb6f92",
					gold: "#f6c177",
					rose: "#ea9a97",
					pine: "#3e8fb0",
					foam: "#9ccfd8",
					iris: "#c4a7e7",
					highlightLow: "#2a283e",
					highlightMed: "#44415a",
					highlightHigh: "#56526e",
				},
			},
			animation: {
				nicknameChangeFont: "nicknameChangeFont 3s infinite",
			},
			keyframes: {
				nicknameChangeFont: {
					from: { "font-family": "Monocraft" },
					"25%": { "font-family": "JetBrains Mono" },
					"50%": { "font-family": "Monaspace Krypton" },
					"75%": { "font-family": "Monaspace Radon" },
					to: { "font-family": "Monocraft" },
				},
			},
		},
	},
	plugins: [
		addIconSelectors(['mingcute']),
	],
};
