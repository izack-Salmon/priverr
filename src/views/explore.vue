<template>
  <section>
    <h1>hi</h1>
    <car class="car-box"/>
    <gig-list :gigs="gigsToShow" />
  </section>
</template>

<script>
// import gigService from "../services/gig-service.js"
import gigList from "@/cmps/gig-list.vue";
import car from "@/cmps/car.vue";
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
    car,
    gigList,
  },
};
</script>
<style>
.car-box{
  margin-left: 200px;
}
</style>