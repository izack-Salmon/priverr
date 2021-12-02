<template>
  <div id="app">
    <appHeader class="home-header" />
    <router-view />
  </div>
</template>

<script>
import appHeader from "./cmps/app-header.vue";

export default {
  setup() {},
  components:{
    appHeader,
  },
  created() {
    this.$store.dispatch({ type: "loadGigs" });
    this.$store.dispatch({ type: "loadUser" });
  },
};
</script>

<style lang="scss">
</style>
