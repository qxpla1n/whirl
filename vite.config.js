import { defineConfig } from 'vite'
import path from 'path'
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap'

export default defineConfig({
	base: '/whirl/',

	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@js': path.resolve(__dirname, 'src/js'),
		},
	},

	plugins: [
		VitePluginSvgSpritemap('src/assets/icons/sprites/**/*.svg', {
			prefix: 'icon-',

			svgo: {
				plugins: [
					{
						name: 'preset-default',
					},

					{
						name: 'removeViewBox',
						active: false,
					},

					{
						name: 'removeAttrs',
						params: {
							attrs: '(fill|stroke)',
						},
					},

					'removeDimensions',
				],
			},
		}),
	],
})
