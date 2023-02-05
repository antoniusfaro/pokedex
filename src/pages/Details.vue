<template>
  <div class="container">
    <router-link class="router-link my-text-color fs-5" to="/"
      >Back to Poke List</router-link
    >
    <div v-if="isLoading" class="text-center">
      <div class="spinner-border text-info" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else>
      <div class="row details-section px-2 pt-3 pb-5">
        <div class="col-lg-4">
          <img v-if="imgSrc" :src="imgSrc" :alt="pokemon.name" width="300" />
          <img v-else src="../assets/not_found.jpg" alt="Not Found" />
        </div>

        <div class="col-lg-8">
          <h2 class="fs-1 my-4 my-text-color">{{ pokemon.name | title }}</h2>
          <div class="row">
            <div class="col-lg-5">
              <h3 class="fs-5">Abilities:</h3>
              <ul>
                <li
                  v-for="(a, idx) in pokemon.abilities"
                  :key="pokemon.id + idx"
                >
                  {{ a.ability.name | title }}
                </li>
              </ul>
              <p class="fs-5">
                Height:
                <span class="fs-4 my-text-color">{{ pokemon.height }}</span>
              </p>
              <p class="fs-5">
                Species:
                <span class="my-text-color">{{
                  pokemon.species.name | title
                }}</span>
              </p>
            </div>
            <div class="col-lg-6">
              <h3 class="fs-5">Stat:</h3>
              <poke-stat
                v-for="(stat, idx) in pokemon.stats"
                :stat="stat"
                :key="pokemon.id + idx"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { textMixin } from "../mixins/textMixin";
import PokeStat from "../components/PokeStat.vue";
export default {
  mixins: [textMixin],
  components: { PokeStat },
  data() {
    return {
      pokemon: {
        name: "",
        sprites: {},
        abilities: [{ name: "" }]
      },
      isLoading: true
    };
  },
  computed: {
    imgSrc() {
      if (this.pokemon.sprites.front_default)
        return this.pokemon.sprites.front_default;
      if (this.pokemon.sprites.front_shiny)
        return this.pokemon.sprites.front_shiny;
      return false;
    }
  },
  mounted() {
    const name = this.$route.params.name;
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + name)
      .then(response => {
        this.pokemon = response.data;
      })
      .finally(() => (this.isLoading = false));
  }
};
</script>
<style>
.my-text-color {
  color: #0074bd;
}

.router-link {
  text-decoration: none;
}

.router-link:hover {
  color: #0a285f;
}

.details-section {
  background: #ffcc00;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.9px);
  border: 5px solid #0074bd;
}
</style>
