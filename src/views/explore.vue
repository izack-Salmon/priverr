<template>
  <section>
    <h1>hi</h1>
    <gig-list :gigs="gigsToShow" />
  </section>
</template>

<script>
import giglist from "../cmps/gig-list.vue";
import { gigService } from "../services/gig.service.js";
export default {
  name: "explore",
  components: {
    giglist,
  },
  data() {},
  created() {},
  computed: {
    gigsToShow() {
      return this.$store.getters.gigs;
    },
  },
  mounteds: {},
};
</script>