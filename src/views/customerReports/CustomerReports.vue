<template>
	<v-container fluid class="customer-reports">
		<h1 class="text-h4">Customer Reports</h1>
		<customer-report-subtitle>Browse all Customer Reports</customer-report-subtitle>
		<ul>
			<li v-for="n in 3" :key="n">
				<router-link :to="{ name: 'CustomerReportShow', params: { id: n } }"
					>Customer Report: {{ n }}</router-link
				>
			</li>
		</ul>
	</v-container>
</template>

<script>
	import CustomerReportSubtitle from './components/CustomerReportSubtitle.vue';
	export default {
		name: 'CustomerReports',
		components: {
			CustomerReportSubtitle,
		},
		data() {
			return {};
		},
	};
</script>

<style lang="scss" scoped></style>
