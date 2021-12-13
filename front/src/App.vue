<template>
  <div id="app">
    <appHeader
      :isOpen="isOpen"
      @setSearch="setSearch"
      @toggleLogin="closeLogin"
      :notification="notification"
      :class="[
        'home-header',
        { 'fixed-header': isFixed },
        { 'rel-header': !isFixed },
      ]"
    />
    <router-view @openLogin="showLogin" />
    <app-footer />
  </div>
</template>

<script>
import { socketService } from "./services/socket.service.js";
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
      isOpen: false,
      notification: 0,
    };
  },
  watch: {
    $route({ name }) {
      this.isFixed = name === "Home";
    },
    user: {
      handler() {
        if (this.$store.getters.logginUser) {
          console.log("user changed", this.$store.getters.logginUser);
          socketService.emit(
            "set-user-socket",
            this.$store.getters.logginUser._id
          );
          socketService.on("purchase", this.socketCheck);
        }
      },
      immediate: true,
    },
  },
  created() {
    socketService.setup();
    this.$store.dispatch({ type: "loadGigs" });
    this.$store.dispatch({ type: "loadUser" });
    this.$store.dispatch({ type: "loadOrders" });
    this.isFixed = this.$route.name === "Home";
  },
  computed: {
    user() {
      return this.$store.getters.logginUser;
    },
  },
  methods: {
    setSearch(searchTerm) {
      console.log("searchTerm", searchTerm);
      this.$store.dispatch({ type: "setSearch", searchTerm });
      this.$router.push({
        path: "explore",
        query: { search: this.searchTerm },
      });
    },

    showLogin() {
      console.log("got it");
      this.isOpen = true;
    },
    closeLogin() {
      this.isOpen = false;
    },
    socketCheck(data) {
      console.log("got the socket", data);
      this.notification += 1;
      // console.log(this.notification);

      // this.$emit("notification");
    },
  },
};
</script>

<style lang="scss">
</style>
