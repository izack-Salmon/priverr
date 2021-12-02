<template>
    <gig-list class="main-layout" :gigs="gigsToShow" />
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
<style>
.car-box{
  margin-left: 200px;
}
</style>