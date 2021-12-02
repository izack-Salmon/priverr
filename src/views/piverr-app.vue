<template>
  <section class="homepage">
    <appHeader class="home-header" />
    <div class="hero-container">
      <div class="brand-campaign">
        <h1 class="hero-tiltle">
          <span
            >Find the perfect <i>freelance</i> services for your business</span
          >
        </h1>
        <form class="home-search-box">
          <input type="search" placeholder='Try "building mobile app"' value />
          <button>Search</button>
        </form>
      </div>
    </div>
    <div class="trust-contaner">
      Trusted by: facebook Google NETFLIX P&#38;G PayPal
    </div>
    <h2>Popular professional services</h2>
    <!-- <popular-gigs :gigs="gigsToShow" /> -->
    <Carousel-popular :gigs="gigsToShow" />
    <gig-categories />
    <app-footer />
  </section>
</template>

<script>
// @ is an alias to /src

import popularGigs from "../cmps/popular-gigs.vue";
import GigCategories from "../cmps/gig-categories.vue";
import appHeader from "../cmps/app-header.vue";
import appFooter from "../cmps/app-footer.vue";
import { gigService } from "../services/gig.service.js";
import CarouselPopular from "../cmps/carousel-popular.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {},
  computed: {
    gigsToShow() {
      return this.$store.getters.gigs;
    },
    popularGigsToShow() {
      console.log(this.$store.getters.popularGigsToShow);
      return this.$store.getters.popularGigsToShow;
    },
  },
  components: {
    popularGigs,
    GigCategories,
    appHeader,
    appFooter,
    CarouselPopular,
  },
};
</script>

<style>

</style>
