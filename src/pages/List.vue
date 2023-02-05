<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <search-bar @keywordChanged="searchKeyword = $event" />
        <div v-if="isLoading" class="text-center">
          <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>

        <div class="mt-3" v-else>
          <card
            v-for="pokemon in paginatedPokemon"
            :pokemon="pokemon"
            :key="pokemon.name"
          >
          </card>
        </div>

        <pagination
          :currentPage="currentPage"
          :total="total"
          :perPage="pageSize"
          @pageChanged="currentPage = $event"
        />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Pagination from "../components/Pagination.vue";
import SearchBar from "../components/SearchBar.vue";
import Card from "../components/Card.vue";
export default {
  components: { Pagination, SearchBar, Card },
  data() {
    return {
      pokemon: [],
      errMsg: "",
      searchKeyword: "",
      isLoading: false,
      pageSize: 10,
      currentPage: 1
    };
  },
  computed: {
    filteredPokemon() {
      return this.pokemon.filter(p => p.name.includes(this.searchKeyword));
    },
    paginatedPokemon() {
      return this.filteredPokemon.slice(this.startOffset, this.endOffset);
    },
    startOffset() {
      return (this.currentPage - 1) * this.pageSize;
    },
    endOffset() {
      return this.startOffset + this.pageSize;
    },
    total() {
      return this.filteredPokemon.length;
    }
  },
  methods: {
    getPokemon() {
      this.isLoading = true;
      axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=10000`)
        .then(response => {
          this.pokemon = response.data.results;
        })
        .catch(err => (this.errMsg = err))
        .finally(() => (this.isLoading = false));
    }
  },
  mounted() {
    this.getPokemon();
  }
};
</script>
<style></style>
