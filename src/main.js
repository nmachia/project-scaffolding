/* eslint no-console: 0 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { registerBaseComponents } from '@/helpers';
import vuetify from '@terakeet/styleguide/src/lib/lib-vuetify';

Vue.config.productionTip = false;

registerBaseComponents(Vue);

Vue.config.devtools = process.env.NODE_ENV === 'development';
if (process.env.NODE_ENV !== 'development') {
	console.log = function () {};
}

new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App),
}).$mount('#app');
