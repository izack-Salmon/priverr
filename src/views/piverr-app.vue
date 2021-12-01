<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Piverr App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/cmps/HelloWorld.vue";
import { gigService } from "../services/gig.service.js";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  created() {
    this.$store.dispatch({ type: "loadGigs" });
  },
};
</script>
