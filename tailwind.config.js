/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			xxl: '1400px',
		},
		extend: {
			fontFamily: {
				greatVibes: ['Great Vibes', 'arial', 'sans-serif'],
				dosis: ['Dosis', 'arial', 'sans-serif'],
				arial: ['arial', 'sans-serif'],
			},
			colors: {
				primary: '#ffffff',
				secondary: '#2d3748',
				accent: '#ff5f83',
				seperator: '#613d55',
				warning: '#f6ad55',
				error: '#e53e3e',
				success: '#38a169',
				background: '#111111',
			},
			height: {
				'1p': '1px',
				vh: '100vh',
			},
			width: {
				'1p': '1px',
				vw: '100vw',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			maxWidth: {
				sm: `${540 / 16}rem`,
				md: `${720 / 16}rem`,
				lg: `${960 / 16}rem`,
				xl: `${1140 / 16}rem`,
				xxl: `${1320 / 16}rem`,
			},
		},
	},
	plugins: [],
}
