<template>
	<v-app id="app">
		<v-navigation-drawer clipped mini-variant expand-on-hover app :mobile-breakpoint="0">
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="text-h6"> Application </v-list-item-title>
					<v-list-item-subtitle> subtext </v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>
			<v-list nav dense>
				<v-list-item link>
					<v-list-item-icon>
						<v-icon>folder</v-icon>
					</v-list-item-icon>
					<v-list-item-title>My Files</v-list-item-title>
				</v-list-item>
				<v-list-item link>
					<v-list-item-icon>
						<v-icon>group</v-icon>
					</v-list-item-icon>
					<v-list-item-title>Shared with me</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-app-bar app clipped-left>
			<router-link :to="{ name: 'Home' }">
				<img src="@/assets/logo.png" height="32" alt="Terakeet Styleguide" />
			</router-link>
			<v-spacer></v-spacer>
			<v-btn icon>
				<v-icon>people_outline</v-icon>
			</v-btn>
			<v-btn icon>
				<v-icon>help_outline</v-icon>
			</v-btn>
			<v-menu left bottom offset-y>
				<template v-slot:activator="{ on, attrs }">
					<v-btn icon v-bind="attrs" v-on="on">
						<v-icon>more_vert</v-icon>
					</v-btn>
				</template>
				<v-list>
					<v-list-item v-for="n in 3" :key="n" @click="() => {}">
						<v-list-item-title>Option {{ n }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
		</v-app-bar>
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
	export default {
		name: 'App',
	};
</script>
<style lang="scss"></style>
