import { reactive } from 'vue'

export const store = reactive({
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=57a37e8d18ae807d791663e015455ec5&query=ritorno",
    movies: [],
    searchInput: ""
});