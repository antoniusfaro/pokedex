<template>
  <nav class="d-flex justify-content-center mt-4">
    <ul class="pagination">
      <li class="page-item" v-show="currentPage != 1" @click="pageChanged(1)">
        <span class="page-link"> << </span>
      </li>
      <li
        v-if="currentPage > 1"
        class="page-item"
        @click="pageChanged(currentPage - 1)"
      >
        <span class="page-link"> < </span>
      </li>
      <li
        v-if="currentPage - 2 >= 1"
        class="page-item"
        @click="pageChanged(currentPage - 2)"
      >
        <span class="page-link ">{{ currentPage - 2 }}</span>
      </li>
      <li
        v-if="currentPage - 1 >= 1"
        class="page-item"
        @click="pageChanged(currentPage - 1)"
      >
        <span class="page-link">{{ currentPage - 1 }}</span>
      </li>
      <li class="page-item active" disabled>
        <span class="page-link">{{ currentPage }}</span>
      </li>
      <li
        v-if="currentPage + 1 <= last"
        class="page-item"
        @click="pageChanged(currentPage + 1)"
      >
        <span class="page-link">{{ currentPage + 1 }}</span>
      </li>
      <li
        v-if="currentPage + 2 <= last"
        class="page-item"
        @click="pageChanged(currentPage + 2)"
      >
        <span class="page-link">{{ currentPage + 2 }}</span>
      </li>
      <li
        v-if="currentPage < last"
        class="page-item"
        @click="pageChanged(currentPage + 1)"
      >
        <span class="page-link"> > </span>
      </li>
      <li
        v-show="currentPage != last"
        class="page-item"
        @click="pageChanged(last)"
      >
        <span class="page-link"> >> </span>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    perPage: {
      type: Number
    },
    currentPage: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      default: 0
    }
  },
  computed: {
    last() {
      return Math.ceil(this.total / this.perPage);
    }
  },
  methods: {
    pageChanged(page) {
      this.$emit("pageChanged", page);
    }
  }
};
</script>
<style>
.page-item:hover {
  cursor: pointer;
}
</style>
