<script>
import axios from 'axios';
import { store } from "./store.js"
import SearchMovie from "./components/SearchMovie.vue"
import MovieCard from "./components/MovieCard.vue"
export default {
  components: {
    SearchMovie,
    MovieCard,

  },
  data() {
    return {
      store,
    }
  },
  mounted() {
    this.getMovies()

  },
  methods: {
    getMovies() {
      let apiAddress = this.store.apiUrl;

      axios.get(apiAddress).then(result => {
        this.store.movies = result.data;
        apiAddress += this.store.searchInput;

      });

    }
  }
}
</script>

<template>
  <main>
    <h1>Films</h1>
    <SearchMovie @search="getMovies" />
    <div class="wrapper">
      <MovieCard /> <!--v-for="movie in store.movies" :movie="movie"-->
    </div>
  </main>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
}

h1 {
  text-align: center;
  padding: 2rem;
}
</style>
