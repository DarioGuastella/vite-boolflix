<script>
import { store } from "../store.js"

export default {
    name: "SearchTitle",
    data() {
        return {
            store
        }
    },
    methods: {
        searchTitle() {
            this.$emit("search");
        }
    },
    mounted() {
    }
}
</script>

<template>
    <div class="searchBox">
        <h2>Cerca film o serie TV</h2>
        <input type="text" placeholder="Cerca film..." v-model="store.searchInput" @keyup.enter="searchTitle">
        <button @click="searchTitle">Cerca</button>

    </div>
</template>

<style scoped>
.searchBox {
    text-align: center;
    margin-top: 2rem;
}
</style>