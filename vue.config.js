const path = require('path');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = {
	configureWebpack: {
		plugins: [new VuetifyLoaderPlugin()],
	},
	chainWebpack: (config) => {
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
		types.forEach((type) => addStyleResource(config.module.rule('scss').oneOf(type)));
	},
};
function addStyleResource(rule) {
	rule.use('style-resource')
		.loader('style-resources-loader')
		.options({
			patterns: [path.resolve(__dirname, './src/styles/global.scss')],
		});
}
