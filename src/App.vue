<script>
import axios from 'axios';
import { store } from "./store.js"
import SearchTitles from "./components/SearchTitles.vue"
import DataCard from "./components/DataCard.vue"

export default {
	components: {
		SearchTitles,
		DataCard,

	},
	data() {
		return {
			store,
		}
	},
	mounted() {


	},
	methods: {
		getTitles() {
			const movies = {
				method: 'GET',
				url: this.store.apiMovUrl,
				params: { query: `${store.searchInput}`, include_adult: 'false', language: 'it-IT', page: '1', api_key: this.store.apiKey },
				headers: {
					accept: 'application/json',
				}
			};
			const tvShows = {
				method: 'GET',
				url: this.store.apiTvUrl,
				params: { query: store.searchInput, include_adult: 'false', language: 'it-IT', page: '1', api_key: this.store.apiKey },
				headers: {
					accept: 'application/json',
				}
			};

			axios
				.request(movies)
				.then(function (response) {
					store.movies = response.data.results;
				})
			axios
				.request(tvShows)
				.then(function (response) {
					store.tvSeries = response.data.results;
				})

		},

	}
}
</script>

<template>
	<header>

		<div class="myContainer d-flex justify-content-between">
			<div>
				<a class="w-100" href="."><img id="logo"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
						alt="">
				</a>
			</div>
			<SearchTitles @search="getTitles" />
		</div>
	</header>

	<main>
		<h2 v-if="!store.movies.length">Cerca tra film e serie TV</h2>
		<h2 v-if="store.movies.length">Film</h2> <br>
		<div class="wrapper">
			<DataCard v-for="movie in store.movies" :data="movie" />
		</div>
		<h2 v-if="store.tvSeries.length">Serie tv</h2><br>
		<div class="wrapper">
			<!-- <TvSeriesCard v-for="serie in store.tvSeries" :tv="serie" /> -->
			<DataCard v-for="serie in store.tvSeries" :data="serie" />
		</div>
	</main>
</template>


<style lang="scss">
@use './styles/general.scss';
</style>

<style scoped lang="scss">
.wrapper {
	display: flex;
	flex-wrap: wrap;
	margin: 0 auto;
	width: 90%;

}

#logo {
	width: 35%;
}

.myContainer {
	width: 90%;
	margin: 0 auto;
	align-items: center;
}

header {
	background-color: black;
	height: 7rem;
	align-items: center;
	display: flex;
}

h2 {
	text-align: center;
	padding: 2rem;
}
</style>
