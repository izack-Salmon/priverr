<template>
  <section>
    <div class="explore-title main-layout">{{ pagetitle }}</div>
    <gig-filter class="main-layout" @filter='filter' />
    <gig-list class="main-layout" :gigs="gigsToShow" />
  </section>
</template>

<script>
// import gigService from "../services/gig-service.js"
import gigFilter from "@/cmps/gig-filter.vue";
import gigList from "@/cmps/gig-list.vue";
import { gigService } from "../services/gig.service.js";

export default {
  name: "explore",
  data() {
    return {
      // pagetitle: "Explore",
    };
  },
  created() {

  },
  computed: {
    gigsToShow() {
      return this.$store.getters.gigs;
    },
    pagetitle() {
      return this.$store.getters.exploreTitle;
    }
  },
  methods: {
    filter(filterBy) {
      console.log('filterBy', filterBy);
      this.$store.dispatch({ type: "setFilterBy", filterBy });

    }
  },
  components: {
    gigList,
    gigFilter,
  },
};
</script>
