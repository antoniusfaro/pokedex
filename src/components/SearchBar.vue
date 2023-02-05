<template>
  <div class="form-floating">
    <textarea
      v-model="keyword"
      class="form-control"
      placeholder="Search Pokemon.."
    ></textarea>
    <label for="floatingTextarea">Search Pokemon..</label>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: ""
    };
  },
  watch: {
    keyword() {
      this.$emit("keywordChanged", this.keyword);
    }
  }
};
</script>
<style></style>
