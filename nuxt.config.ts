import { defineNuxtConfig } from 'nuxt/config'
import { resolve } from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	app: {
		head: {
		title: "ada-marché.com",
		link: [
			{ rel: 'icon', href: "/img/favicon-32x32.png", sizes: "32x32" },
		]
		}
	},
	ssr: true,
	alias: {
		'@': resolve(__dirname, '.'),
		'~': resolve(__dirname, '.'),
	},
	modules: [
		'@nuxtjs/tailwindcss',
		//    '@nuxtjs/style-resources',
		//    '@nuxtjs/color-mode',
		//    '@nuxtjs/supabase',
		//    '@nuxtjs/algolia',
		//    '@nuxtjs/icon',
		//    '@nuxtjs/devtools'
		//    '@nuxtjs/telemetry',
		//    '@nuxtjs/route-meta',
		//    '@nuxtjs/robots',
		//    '@nuxtjs/gtm',
		//    '@nuxtjs/sitemap',
		//    '@nuxtjs/google-fonts',
		//    '@nuxtjs/gtag',
		//    '@nuxtjs/pwa',
		//    '@nuxtjs/nuxtjs-mdi',
		//    '@nuxtjs/nuxtjs-heroicons',
		//    '@nuxtjs/nuxtjs-heroicons/outline',
		//    '@nuxtjs/nuxtjs-heroicons/solid',
		//    '@nuxtjs/nuxtjs-heroicons/mini',
		//    '@nuxtjs/nuxtjs-heroicons/solid/24/outline',
		//    '@nuxtjs/nuxtjs-heroicons/solid/24/mini',
		//    '@nuxtjs/nuxtjs-heroicons/solid/24/solid',
		'@nuxtjs/i18n',
		'@nuxt/icon',
		'@pinia/nuxt'
	],
	vite: {
		server: {
		watch: {
			usePolling: true,
		}
		}
	},
	icon: {
		customCollections: [
		{
			prefix: 'amc',
			dir: './public/svg'
		}
		]
	},
	i18n: {
		locales: [
				{ code: 'ja', name: '日本語', file: 'ja.ts' },
				{ code: 'en', name: 'English', file: 'en.ts' }
			],
			defaultLocale: 'ja',
			lazy: true,
			langDir: 'locales',
			strategy: 'prefix_except_default',
			detectBrowserLanguage: {
			useCookie: true,
			fallbackLocale: 'ja'
		},
		bundle: {
			optimizeTranslationDirective: false,
		},
		dynamicHtmlAttrs: true,
	},
	devServer: {
		proxy: {
			'/api': {
				target: 'http://ec-cube',
				changeOrigin: true
			}
		}
	},
	devtools: {
		enabled: true,

		timeline: {
			enabled: true
		}
	}
})