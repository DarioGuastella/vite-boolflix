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
    <div class="cardContainer">
        <div class="shadowBox">
            <h2>{{ movie.original_title }}</h2>
        </div>
    </div>
</template>

<style scoped>
.cardContainer {
    width: calc(100% / 5 - 4rem);
    background-color: crimson;
    aspect-ratio: 1;
    margin: 2rem;
    line-height: 1.5;
    padding: 2rem;
    border-radius: 10px;
    word-break: break-word;
}

.shadowBox {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 25px;
    padding: 2rem;
    height: 548px;
}

h4,
h2 {
    margin-bottom: 2rem;
}
</style>