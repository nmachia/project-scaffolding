export default {
	increment(context) {
		console.log('VUEX ACTION: increment');
		context.commit('INCREMENT');
	},
};
