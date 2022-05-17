<template>
	<div>
		<h1>Customer Report Edit: {{ id }}</h1>
		<div>Increment on mount: {{ count }}</div>
		<div>Doubled increment: {{ doubleCount }}</div>
		<button @click="increment">Increment Manually</button>
		<div>
			<router-link :to="{ name: 'CustomerReportShow', params: { id } }">View Report</router-link>
		</div>
	</div>
</template>

<script>
	import { mapState, mapActions, mapGetters } from 'vuex';
	export default {
		props: {
			id: {
				type: [Number, String],
				required: true,
			},
		},
		name: 'CustomerReportEdit',
		data() {
			return {};
		},
		computed: {
			...mapState({
				count: (state) => state.customerReports.customerCount,
			}),
			...mapGetters({
				doubleCount: 'customerReports/getDoubleCount',
			}),
		},
		mounted() {
			this.increment();
		},
		methods: {
			...mapActions({
				increment: 'customerReports/increment',
			}),
		},
	};
</script>

<style lang="scss" scoped></style>
