<template>
  <div id="app">
    <appHeader :class="['home-header', { 'fixed-header': isFixed },{'rel-header': !isFixed}]" />
    <router-view />
  </div>
</template>

<script>
import appHeader from "./cmps/app-header.vue";

export default {
  setup() {},
  components: {
    appHeader,
  },
  data() {
    return {
      isFixed: true,
    };
  },
  watch: {
    $route({ name }) {
      this.isFixed = (name === "Home") ? true : false;
    },
  },
  created() {
    this.$store.dispatch({ type: "loadGigs" });
    this.$store.dispatch({ type: "loadUser" });
  },
};
</script>

<style lang="scss">
</style>
