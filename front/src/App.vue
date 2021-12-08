<template>
  <div id="app">
    <appHeader
      @setSearch="setSearch"
      :class="[
        'home-header',
        { 'fixed-header': isFixed },
        { 'rel-header': !isFixed },
      ]"
    />
    <router-view />
    <app-footer />

  </div>
</template>

<script>
import appHeader from "./cmps/app-header.vue";
import appFooter from "./cmps/app-footer.vue";

export default {
  setup() {},
  components: {
    appHeader,
    appFooter,
  },
  data() {
    return {
      isFixed: true,
    };
  },
  watch: {
    $route({ name }) {
      this.isFixed = name === "Home" ? true : false;
    },
  },
  created() {
    this.$store.dispatch({ type: "loadGigs" });
    this.$store.dispatch({ type: "loadUser" });
    this.isFixed = this.$route.name === "Home" ? true : false;
  },
  methods: {
    setSearch(searchTerm) {
      console.log("searchTerm", searchTerm);
      this.$store.dispatch({ type: "setSearch", searchTerm });
      this.$router.push({path:'explore', query: { search: this.searchTerm }});
    },
  },
};
</script>

<style lang="scss">
</style>
