<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
require("slick-carousel");
export default {
  setup() {},
  created() {
    this.$store.dispatch({ type: "loadGigs" });
    this.$store.dispatch({ type: "loadUser" });
  },
};
</script>

<style lang="scss">
</style>
