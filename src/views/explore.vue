<template>
  <section>
    <!-- <gig-filter class="main-layout"  /> -->
    <gig-list class="main-layout" :gigs="gigsToShow" />
  </section>
</template>

<script>
// import gigService from "../services/gig-service.js"
// import gigFilter from "@/cmps/gig-filter.vue";
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
    // gigFilter
  },
};
</script>
<style>
.car-box{
  margin-left: 200px;
}
</style>