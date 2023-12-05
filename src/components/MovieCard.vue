<script>
import { store } from "../store.js"
export default {
    name: "MovieCard",
    props: {
        movie: Object
    },
    data() {
        return {
            store,
        }
    },
    mounted() {
        // console.log(this.movie.original_title)

    },
}


</script>

<template>
    <div class="shadowBox cardContainer">
        <h2 class="title">Titolo: </h2>
        <h2>{{ movie.title }}</h2>
        <h2 class="title">Titolo originale: </h2>
        <h2>{{ movie.original_title }}</h2>
        <h2 class="lang">Lingua originale:</h2>
        <img v-if="this.store.flags.includes(movie.original_language)" :src="'/' + movie.original_language + '.png'">
        <h2 v-else>{{ movie.original_language }}</h2>
        <h2>{{ `Voto: ${movie.vote_average}` }}</h2>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/partials/_variables.scss" as *;

.cardContainer {
    width: calc(100% / 5 - 0.4rem);
    margin: 0.2rem;
    line-height: 1.5;
    word-break: break-word;
    height: 30rem;
    text-align: center;
}

.title {
    margin-bottom: 0.2rem;
}

.shadowBox {
    background-color: rgb(48, 48, 47);
    padding: 2rem;

}

h2 {
    margin-bottom: 2rem;
    font-size: 1.3rem;
}

.lang {
    margin-bottom: 1rem;
}

img {
    margin-bottom: 2rem;
    width: 50px;
}
</style>