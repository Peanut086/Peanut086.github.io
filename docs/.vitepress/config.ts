import {defineConfig} from 'vitepress'
import pnTheme from './theme/index'
export default defineConfig({
	base: '/docs/',
	appearance: true,
	description: 'JavaScript大王',
	head: [
		['link', {rel: 'icon', href: '/logo2.png'}],
		['meta', {name: 'author', content: 'peanut'}],
		['meta', {name: 'keywords', content: '前端,JavaScript,TypeScript,Vue,React,Node,Webpack'}],
		['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
		['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
		['meta', {name: 'format-detection', content: 'telephone=no'}],
		['meta', {name: 'format-detection', content: 'email=no'}],
		['meta', {name: 'renderer', content: 'webkit'}],
		['meta', {name: 'force-rendering', content: 'webkit'}],
		['meta', {name: 'X-UA-Compatible', content: 'IE=edge,chrome=1'}],
		['meta', {name: 'HandheldFriendly', content: 'true'}],
		['meta', {name: 'MobileOptimized', content: '320'}],
		['meta', {name: 'screen-orientation', content: 'portrait'}],
	],
	lang: 'zh-CN',
	lastUpdated: true,
	themeConfig: {
		siteTitle: "JavaScript大王",
		logo: "/logo2.png",
		nav: [
			{
				text: '前端',
				items: [
					{
						text: 'npm包收录',
						link: '/frontEnd/npm包大全',
					}
				]
			}
		],
		socialLinks: [
			{
				icon: 'github',
				link: 'www.peanut.icu',
			},
		],
		sidebar: {},
	},
	title: 'JavaScript大王',
	// vite: {
	// 	resolve: {
	// 		alias: [
	// 			{
	// 				// find: /^.*\/VPNavBar\.vue$/,
	// 				// replacement: fileURLToPath(
	// 				// 	new URL('./components/CustomNavBar.vue', import.meta.url)
	// 				// )
	// 			}
	// 		]
	// 	}
	// }
})
