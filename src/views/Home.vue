<template>
	<v-container fluid class="home">
		<h1 class="text-h4">Home</h1>
		<ul>
			<li><router-link to="/customer-reports">Customer Reports</router-link></li>
		</ul>
	</v-container>
</template>

<script>
	export default {
		name: 'Home',
	};
</script>
