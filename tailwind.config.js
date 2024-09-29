/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			},
			colors: {
				'kinaase-green': {
					DEFAULT: '#1c5e5c',
					100: '#d2dfde',
					200: '#a4bfbe',
					300: '#779e9d',
					400: '#497e7d',
					500: '#1c5e5c',
					600: '#164b4a',
					700: '#113837',
					800: '#0b2625',
					900: '#061312'
				}
			}
		}
	},
	plugins: []
};
