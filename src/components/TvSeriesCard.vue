<script>
export default {
    name: "TvSeriesCard",
    props: {
        tv: Object
    },
    mounted() {
        // console.log(this.tv.original_name)

    }
}


</script>

<template>
    <div class="shadowBox cardContainer">
        <h2>{{ `Titolo: "${tv.name}"` }}</h2>
        <h2>{{ `Titolo originale: "${tv.original_name}"` }}</h2>
        <h2 class="lang">Lingua originale:</h2>
        <img :src="'/' + tv.original_language + '.png'">
        <h2>{{ `Voto: ${tv.vote_average}` }}</h2>
    </div>
</template>

<style scoped>
.cardContainer {
    width: calc(100% / 5 - 0.4rem);
    margin: 0.2rem;
    line-height: 1.5;
    word-break: break-word;
}

.shadowBox {
    background-color: rgb(48, 48, 47);
    padding: 2rem;
}

img {
    margin-bottom: 2rem;
    width: 50px;
}

h2 {
    margin-bottom: 2rem;
    font-size: 1.3rem;
}
</style>