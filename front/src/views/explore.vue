<template>
  <section>
    <div class="explore-title main-layout">{{ pageTitle }}</div>
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
      pageTitle: "Explore",
    };
  },
  created() {
    if (this.$route.query.tag) {
        let filterBy={ tag:this.$route.query.tag}
        this.filter(filterBy);
        this.pageTitle = this.$route.query.tag;
    } else if (this.$route.query.search) {
        this.pageTitle = `Results for "${this.$route.query.search}"`;
    } else {
      this.pageTitle = 'Explore'
    }
  },
  computed: {
    gigsToShow() {
      return this.$store.getters.gigs;
    },
    // pageTitle() {
    //   return this.$store.getters.exploreTitle;
    // }
    
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
