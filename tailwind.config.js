const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundOpacity: {
				15: '0.15',
			},
			colors: {
				gray: {
					50: '#F0F0FF',
					100: '#E4E6E6',
					200: '#BBCCCC',
					300: '#8AA3AB',
					400: '#698686',
					500: '#3A4545',
					600: '#242F2F',
					700: '#181F20',
					800: '#121818',
					900: '#0c1010',
				},
				primary: {
					50: '#9BDEE1',
					100: '#2FF6EC',
					200: '#1CDBEC',
					300: '#14E4EC',
					400: '#08E3EC',
					500: '#4FC0B6',
					600: '#00A9AC',
					700: '#00E1CC',
					800: '#05A99F',
					900: '#112927',
				},
			},
			fontFamily: {
				inter: ['Inter', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {},
	plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')],
};


