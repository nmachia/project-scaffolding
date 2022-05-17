export default {
	INCREMENT(state) {
		console.log('VUEX MUTATION: INCREMENT');
		state.customerCount++;
	},
};
