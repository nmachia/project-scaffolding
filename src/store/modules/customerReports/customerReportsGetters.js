export default {
	getDoubleCount(state) {
		console.log('VUEX GETTER: doubleCount');
		return state.customerCount * 2;
	},
};
