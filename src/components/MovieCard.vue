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
        // // console.log(this.movie.original_title)


    },

    methods: {

    }
}


</script>

<template>
    <div class="shadowBox cardContainer">
        <!-- <h2 class="title">Titolo: </h2>
        <h2>{{ movie.title }}</h2>
        <h2 class="title">Titolo originale: </h2>
        <h2>{{ movie.original_title }}</h2>
        <h2 class="lang">Lingua originale:</h2>
        <img class="flag" v-if="this.store.flags.includes(movie.original_language)"
            :src="'/' + movie.original_language + '.png'">
        <h2 v-else>{{ movie.original_language }}</h2>
        <span v-if="(Math.ceil(movie.vote_average / 2)) == 1">
            <h2>Voto: </h2>
            <font-awesome-icon :icon="['fas', 'star']" class="yellow" />
        </span>
        <span v-if="(Math.ceil(movie.vote_average / 2)) == 2">
            <h2>Voto: </h2>
            <font-awesome-icon :icon="['fas', 'star']" class="yellow" />
            <font-awesome-icon :icon="['fas', 'star']" class="yellow" />
        </span>
        <span v-if="(Math.ceil(movie.vote_average / 2)) == 3">
            <h2>Voto: </h2>
            <font-awesome-icon :icon="['fas', 'star']" class="yellow" />
            <font-awesome-icon :icon="['fas', 'star']" class="yellow" />
            <font-awesome-icon :icon="['fas', 'star']" class="yellow" />
        </span>
        <span v-if="(Math.ceil(movie.vote_average / 2)) == 4">
            <h2>Voto: </h2>
            <font-awesome-icon :icon="['fas', 'star']" class="yellow" />
            <font-awesome-icon :icon="['fas', 'star']" class="yellow" />
            <font-awesome-icon :icon="['fas', 'star']" class="yellow" />
            <font-awesome-icon :icon="['fas', 'star']" class="yellow" />
        </span>
        <span v-if="(Math.ceil(movie.vote_average / 2)) == 5">
            <h2>Voto: </h2>
            <font-awesome-icon :icon="['fas', 'star']" class="yellow" />
            <font-awesome-icon :icon="['fas', 'star']" class="yellow" />
            <font-awesome-icon :icon="['fas', 'star']" class="yellow" />
            <font-awesome-icon :icon="['fas', 'star']" class="yellow" />
            <font-awesome-icon :icon="['fas', 'star']" class="yellow" />
        </span>
        <div v-if="(Math.ceil(movie.vote_average / 2)) == 0">
            <h2>Voto:</h2>
            <h2>0</h2>
        </div> -->

        <img v-if="movie.poster_path" :src="this.store.coversUrl + movie.poster_path" alt="">
        <h2 class="noCover" v-else>Copertina non disponibile</h2>
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

.yellow {
    color: goldenrod;
}

.flag {
    width: 4rem;
    object-fit: contain;
    height: auto;
}

.noCover {
    text-align: center;
    padding-top: 14rem;
}

.title {
    margin-bottom: 0.2rem;
}

.shadowBox {
    background-color: rgb(48, 48, 47);
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
    width: 100%;
    height: 100%;
}
</style>