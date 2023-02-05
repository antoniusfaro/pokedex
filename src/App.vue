<template>
  <div id="app">
    <div class="container mb-5">
      <img
        src="./assets/logo.png"
        alt=""
        height="150"
        class="d-block mx-auto"
      />
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Share Tech Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
