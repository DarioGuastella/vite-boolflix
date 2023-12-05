import { reactive } from 'vue'

export const store = reactive({
    apiMovUrl: "https://api.themoviedb.org/3/search/movie",
    apiTvUrl: "https://api.themoviedb.org/3/search/tv",
    coversUrl: "https://image.tmdb.org/t/p/w342",
    apiKey: "57a37e8d18ae807d791663e015455ec5",
    movies: [],
    tvSeries: [],
    flags: ["de", "en", "fi", "fr", "it", "ja", "ko", "no", "pt", "zh"],
    searchInput: ""
});