<script>
import axios from 'axios';
import { store } from "./store.js"
import SearchMovie from "./components/SearchMovie.vue"
import MovieCard from "./components/MovieCard.vue"
import TvSeriesCard from "./components/TvSeriesCard.vue"
export default {
  components: {
    SearchMovie,
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
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: { query: `${store.searchInput}`, include_adult: 'false', language: 'en-US', page: '1' },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2EzN2U4ZDE4YWU4MDdkNzkxNjYzZTAxNTQ1NWVjNSIsInN1YiI6IjY1NmRiMjlhODg2MzQ4MDBlYTQ4MGJjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qAUoWeOIhQGhVHy9HQBJxICWt09m-CRVKPnrYUSiHTQ'
        }
      };
      const options2 = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/tv',
        params: { query: `${store.searchInput}`, include_adult: 'false', language: 'en-US', page: '1' },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2EzN2U4ZDE4YWU4MDdkNzkxNjYzZTAxNTQ1NWVjNSIsInN1YiI6IjY1NmRiMjlhODg2MzQ4MDBlYTQ4MGJjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qAUoWeOIhQGhVHy9HQBJxICWt09m-CRVKPnrYUSiHTQ'
        }
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data.results);
          store.movies = response.data.results;
        })
        .catch(function (error) {
          console.error(error);
        });
      axios
        .request(options2)
        .then(function (response) {
          console.log("serie tv" + response.data.results);
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
    <SearchMovie @search="getTitles" />
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

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;

}

h2 {
  text-align: center;
  padding: 2rem;
}
</style>
