<template>
  <div class="card flex flex-row justify-content-between p-2 mb-2">
    <span class="card-title fs-4 mb-0">{{ pokemon.name | title }}</span>
    <router-link class="fs-4 card-link" :to="'/details/' + pokemon.name">
      Details
    </router-link>
  </div>
</template>
<script>
import { textMixin } from "../mixins/textMixin";
export default {
  mixins: [textMixin],
  props: {
    pokemon: {
      type: Object
    }
  }
};
</script>
<style>
.card {
  background-color: #ffd633;
  border: 1px solid #b3d6ec;
}

.card:hover {
  background-color: #ffdb4d;
  border: 1px solid #80badf;
}

.card-title,
.card-link {
  color: #0075be;
}

.card-link {
  text-decoration: none;
}

.card-link:hover {
  color: #0a285f;
}
</style>
