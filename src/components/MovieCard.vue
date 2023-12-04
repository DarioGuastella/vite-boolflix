<script>
export default {
    name: "MovieCard",
    props: {
        movie: Object
    },
    mounted() {
        console.log(this.movie.original_title)

    }
}


</script>

<template>
    <div class="shadowBox cardContainer">
        <h2>{{ `Titolo: "${movie.title}"` }}</h2>
        <h2>{{ `Titolo originale: "${movie.original_title}"` }}</h2>
        <h2 class="lang">Lingua originale:</h2>
        <img :src="'/' + movie.original_language + '.png'">
        <h2>{{ `Voto: ${movie.vote_average}` }}</h2>
    </div>
</template>

<style scoped>
.cardContainer {
    width: calc(100% / 5 - 4rem);
    aspect-ratio: 1;
    margin: 2rem;
    line-height: 1.5;
    word-break: break-word;
}

.shadowBox {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 25px;
    padding: 2rem;
    height: 548px;
}

h2 {
    margin-bottom: 2rem;
}

.lang {
    margin-bottom: 1rem;
}

img {
    margin-bottom: 2rem;
}
</style>