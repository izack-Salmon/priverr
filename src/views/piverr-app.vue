<template>
  <section class="homepage">
    <div class="hero-container">
      <div class="brand-campaign main-layout">
        <h1 class="hero-tiltle">
          <span
            >Find the perfect <i>freelance</i> services for your business</span
          >
        </h1>
        <form class="home-search-box">
          <input type="search" placeholder='Try "building mobile app"' value />
          <button>Search</button>
        </form>
        <div class="popular">
          <ul>
            <span>Popular:</span>
            <span
              class="span-popular"
              v-for="popular in populars"
              :key="popular"
            >
              {{ popular }}
            </span>
          </ul>
        </div>
      </div>
    </div>
    <div class="trust-contaner">
      <span class="trusted-by-text">Trusted by:</span>
      <img
        src="https://res.cloudinary.com/pivarr/image/upload/v1638461625/trustedBy/facebook.31d5f92_co1oi9.png"
      />
      <img
        src="https://res.cloudinary.com/pivarr/image/upload/v1638461624/trustedBy/google.517da09_nmculq.png"
      />
      <img
        src="https://res.cloudinary.com/pivarr/image/upload/v1638461625/trustedBy/netflix.e3ad953_rloyww.png"
      />
      <img
        src="https://res.cloudinary.com/pivarr/image/upload/v1638461625/trustedBy/pandg.8b7310b_ybptae.png"
      />
      <img
        src="https://res.cloudinary.com/pivarr/image/upload/v1638461625/trustedBy/paypal.ec56157_mdfif2.png"
      />
      <!-- Trusted by: facebook Google NETFLIX P&#38;G PayPal -->
    </div>
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
    return {
      populars: ["WebSite Design", "WordPress", "Logo Design", "NFT Art"],
    };
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
