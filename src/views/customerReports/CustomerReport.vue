<template>
	<div>
		<h1>Customer Report: {{ id }}</h1>
		<customer-report-subtitle>A single report</customer-report-subtitle>
		<!-- Idle -->
		<div v-if="fetchDogStatusIdle">
			Press the button to fetch a nice dog. <button @click="fetchDog">fetch Dog</button>
		</div>
		<!-- Pending -->
		<div v-if="fetchDogStatusPending">
			<p>Loading data</p>
		</div>
		<!-- Error -->
		<div v-if="fetchDogStatusError">
			<p>Oops, there was a problem</p>
		</div>
		<!-- Success -->
		<div v-if="fetchDogStatusSuccess">
			<img :src="dog" alt="Dog Image from API" />
		</div>
		<ul>
			<li><router-link :to="{ name: 'CustomerReportEdit', params: { id } }">Edit</router-link></li>
			<li><router-link :to="{ name: 'CustomerReportsShow' }">Browse Reports</router-link></li>
		</ul>
	</div>
</template>

<script>
	import CustomerReportSubtitle from './components/CustomerReportSubtitle.vue';
	import { fetchDog } from '@/api/customerReportsApi';
	import { apiStatus, apiStatusComputedFactory } from '@/api';
	import { withAsync } from '@/api/helpers/withAsync';
	const { IDLE, PENDING, SUCCESS, ERROR } = apiStatus;
	export default {
		props: {
			id: {
				type: [Number, String],
				required: true,
			},
		},
		name: 'CustomerReport',
		components: {
			CustomerReportSubtitle,
		},
		data() {
			return {
				dog: null,
				fetchDogStatus: IDLE,
			};
		},
		computed: {
			...apiStatusComputedFactory('fetchDogStatus'),
		},
		methods: {
			async fetchDog() {
				this.fetchDogStatus = PENDING;
				const { response, error } = await withAsync(fetchDog);
				if (error) {
					this.fetchDogStatus = ERROR;
					return;
				}
				this.dog = response.data.message;
				this.fetchDogStatus = SUCCESS;
			},
		},
	};
</script>

<style lang="scss" scoped></style>
