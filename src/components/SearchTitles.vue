<script>
import { store } from "../store.js"

export default {
	name: "SearchTitle",
	data() {
		return {
			store
		}
	},
	methods: {
		searchTitle() {
			this.$emit("search");
		}
	},
	mounted() {
	}
}
</script>

<template>
	<div class="searchBox">
		<!-- <h2>Cerca film o serie TV</h2> -->
		<input type="text" placeholder="Cerca film e serie tv" v-model="store.searchInput" @keyup.enter="searchTitle">

	</div>
</template>

<style scoped lang="scss">
.searchBox {
	text-align: center;
}
</style>