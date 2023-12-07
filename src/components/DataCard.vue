<script>
import { store } from "../store.js"
export default {
	name: "DataCard",
	props: {
		data: Object
	},
	data() {
		return {
			store,
		}
	},
	mounted() {
		// // console.log(this.data.original_title)


	},

	methods: {
		getStars(n) {
			return Math.ceil(n / 2)
		}
	}
}


</script>

<template>
	<div class="cardContainer">
		<div class="flip-card">
			<div class="flip-card-inner">
				<div class="flip-card-front">
					<img v-if="data.poster_path" :src="this.store.coversUrl + data.poster_path" alt="">
					<h2 class="noCover" v-else><img
							src="https://media.tenor.com/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif" alt="">
					</h2>
				</div>
				<div class="flip-card-back">
					<h2 class="title">Titolo: </h2>
					<h2 v-if="data.title">{{ data.title }}</h2>
					<h2 v-else>{{ data.name }}</h2>
					<h2 class="title">Titolo originale: </h2>
					<h2 v-if="data.original_title">{{ data.original_title }}</h2>
					<h2 v-else>{{ data.original_name }}</h2>
					<div class="mb-4">
						<h2 class="mb-0">Voto: </h2>
						<font-awesome-icon v-for="n in getStars(data.vote_average)" :icon="['fas', 'star']"
							class="yellow" />
						<font-awesome-icon v-for="n in (5 - getStars(data.vote_average))" :icon="['fas', 'star']"
							class="text-white" />
					</div>
					<h2 class="lang">Trama:</h2>
					<h2>{{ data.overview }}</h2>
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

.flag {
	width: 4rem;
	object-fit: contain;
	height: auto;
}

.noCover {
	// text-align: center;
	// padding-top: 14rem;
	height: 100%;
}

.title {
	margin-bottom: 0.2rem;
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