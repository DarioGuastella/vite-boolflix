<script>
import axios from 'axios';
import { store } from "./store.js"
import SearchTitles from "./components/SearchTitles.vue"
import MovieCard from "./components/MovieCard.vue"
import TvSeriesCard from "./components/TvSeriesCard.vue"
export default {
  components: {
    SearchTitles,
    MovieCard,
    TvSeriesCard,

  },
  data() {
    return {
      store,
    }
  },
  mounted() {
    this.getTitles()

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
        params: { query: `${store.searchInput}`, include_adult: 'false', language: 'en-US', page: '1', api_key: this.store.apiKey },
        headers: {
          accept: 'application/json',
        }
      };

      axios
        .request(movies)
        .then(function (response) {
          store.movies = response.data.results;
        })
        .catch(function (error) {
          console.error(error);
        });
      axios
        .request(tvShows)
        .then(function (response) {
          store.tvSeries = response.data.results;
        })
        .catch(function (error) {
          console.error(error);
        });

    }
  }
}
</script>

<template>
  <main>
    <SearchTitles @search="getTitles" />
    <h2>Films</h2> <br>
    <div class="wrapper">
      <MovieCard v-for="movie in store.movies" :movie="movie" />
    </div>
    <h2>Serie tv</h2><br>
    <div class="wrapper">
      <TvSeriesCard v-for="serie in store.tvSeries" :tv="serie" />
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

h2 {
  text-align: center;
  padding: 2rem;
}
</style>
