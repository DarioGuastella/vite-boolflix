<script>
import { store } from "../store.js"
export default {
    name: "TvSeriesCard",
    props: {
        tv: Object
    },
    data() {
        return {
            store,
        }
    },
    mounted() {
        // console.log(this.tv.original_name)

    }
}


</script>

<template>
    <div class="shadowBox cardContainer">
        <!-- <h2 class="title">Titolo: </h2>
        <h2>{{ tv.name }}</h2>
        <h2 class="title">Titolo originale: </h2>
        <h2>{{ tv.name }}</h2>
        <h2 class="lang">Lingua originale:</h2>
        <img class="flag" v-if="this.store.flags.includes(tv.original_language)" :src="'/' + tv.original_language + '.png'">
        <h2 v-else>{{ tv.original_language }} </h2>
        <h2>{{ "Voto: " + Math.ceil(tv.vote_average / 2) }}</h2> -->
        <img v-if="tv.poster_path" :src="this.store.coversUrl + tv.poster_path" alt="">
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

.noCover {
    text-align: center;
    padding-top: 14rem;
}

.flag {
    width: 4rem;
    object-fit: contain;
    height: auto;
}

.title {
    margin-bottom: 0.2rem;
}

.shadowBox {
    background-color: rgb(48, 48, 47);
}

img {
    margin-bottom: 2rem;
    width: 100%;
    height: 100%;
}

h2 {
    margin-bottom: 2rem;
    font-size: 1.3rem;

}
</style>