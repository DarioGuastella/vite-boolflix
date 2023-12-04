<script>
import { store } from "../store.js"

export default {
    name: "SearchMovie",
    data() {
        return {
            store
        }
    },
    methods: {
        searchMovie() {
            this.$emit("search");
        }
    },
    mounted() {
    }
}
</script>

<template>
    <div>
        <input type="text" placeholder="Cerca film..." v-model="store.searchInput" @keyup.enter="searchMovie">
        <button @click="searchMovie">Cerca</button>

    </div>
</template>

<style scoped></style>