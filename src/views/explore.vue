<template>
  <section>
    <h1>hi</h1>
    <gig-list :gigs="gigsToShow" />
  </section>
</template>

<script>
// import gigService from "../services/gig-service.js"
import gigList from "@/cmps/gig-list.vue";
import { gigService } from "../services/gig.service.js";
export default {
  name: "explore",
  data() {
    return {};
  },
  created() {},
  computed: {
    gigsToShow() {
      return this.$store.getters.gigs;
    },
  },
  mounteds: {},
  components: {
    gigList,
  },
};
</script>