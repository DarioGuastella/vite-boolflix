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
            // console.log("Tipo di birra: ", this.store.beersType);
            this.$emit("search");
            // console.log(this.store.beersType);
        }
    },
    mounted() {
    }
}
</script>

<template>
    <div>
        <input type="text" placeholder="Cerca film..." v-model="store.searchInput">
        <button @click="searchMovie">Cerca</button>

    </div>
</template>

<style scoped></style>