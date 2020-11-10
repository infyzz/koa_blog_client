module.exports = {
	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'client',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},
	css: ['~/assets/style.scss'],
	// Global CSS (https://go.nuxtjs.dev/config-css)
	srcDir: './',
	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [{ src: '~plugins/axios', ssr: true }],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		// https://go.nuxtjs.dev/stylelint
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa'
	],

	// Axios module configuration (https://go.nuxtjs.dev/config-axios)
	axios: {
		proxy: true
	},
	// proxy: {
	// 	'/api/': 'http://localhost:3100',
	// },

	// Content module configuration (https://go.nuxtjs.dev/config-content)
	content: {},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {}
};
