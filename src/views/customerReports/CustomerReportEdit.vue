<template>
	<v-container fluid class="customer-report-edit">
		<h1 class="text-h4">Customer Report Edit: {{ id }}</h1>
		<div>Increment on mount (not connected to :id prop): {{ count }}</div>
		<div>Doubled increment: {{ doubleCount }}</div>
		<v-btn color="primary" small @click="increment">Increment Manually</v-btn>
		<div>
			<router-link :to="{ name: 'CustomerReportShow', params: { id } }">View Report</router-link>
		</div>
	</v-container>
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
