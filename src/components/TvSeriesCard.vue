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

    },
    methods: {
        getStars(n) {
            Math.ceil(n / 2)
        }
    }
}


</script>

<template>
    <div class="cardContainer">
        <!-- <h2 class="name">Titolo: </h2>
        <h2>{{ tv.name }}</h2>
        <h2 class="name">Titolo originale: </h2>
        <h2>{{ tv.name }}</h2>
        <h2 class="lang">Lingua originale:</h2>
        <img class="flag" v-if="this.store.flags.includes(tv.original_language)" :src="'/' + tv.original_language + '.png'">
        <h2 v-else>{{ tv.original_language }} </h2>
        <h2>{{ "Voto: " + Math.ceil(tv.vote_average / 2) }}</h2> -->
        <!-- <img v-if="tv.poster_path" :src="this.store.coversUrl + tv.poster_path" alt="">
        <h2 class="noCover" v-else>Copertina non disponibile</h2> -->

        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img v-if="tv.poster_path" :src="this.store.coversUrl + tv.poster_path" alt="">
                    <h2 class="noCover" v-else>Copertina non disponibile</h2>
                </div>
                <div class="flip-card-back">
                    <h2 class="name">Titolo: </h2>
                    <h2>{{ tv.name }}</h2>
                    <h2 class="name">Titolo originale: </h2>
                    <h2>{{ tv.original_name }}</h2>
                    <div class="mb-4" v-if="(Math.ceil(tv.vote_average / 2)) == 1">
                        <h2 class="mb-0">Voto: </h2>
                        <font-awesome-icon v-for="i in getStars(tv.vote_average)" :icon="['fas', 'star']" class="yellow" />
                    </div>
                    <div v-if="getStars(tv.vote_average) == 0">
                        <h2>Voto:</h2>
                        <h2>0</h2>
                    </div>
                    <h2 class="lang">Trama:</h2>
                    <h2 class="lang">{{ tv.overview }}</h2>

                </div>
            </div>
        </div>
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

.name {
    margin-bottom: 0.2rem;
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


.flip-card {
    background-color: transparent;
    height: 100%;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: auto;
}

.flip-card-front {
    background-color: #bbb;
    color: black;
    overflow: hidden;
}

.flip-card-back {
    background-color: rgb(44, 43, 43);
    color: white;
    transform: rotateY(180deg);
}
</style>