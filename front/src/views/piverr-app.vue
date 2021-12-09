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
          <svg
            class="search-svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z"
            ></path>
          </svg>
          <input
            v-model="searchTerm"
            type="search"
            placeholder='Try "building mobile app"'
            value
          />
          <button @click="setSearch">Search</button>
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
        <div class="relative-box">
          <div class="hero-snippet gabrielle">Gabrielle, Video Editor</div>
          <div class="hero-snippet moon">Moon, Marketing Expet</div>
          <div class="hero-snippet ritika">Ritika, Shoemaker and Designer</div>
          <div class="hero-snippet zach">Zach, Bar Owner</div>
          <div class="hero-snippet andrea">Andrea, Fashion Designer</div>
        </div>
      </div>
    </div>
    <div class="trust-contaner">
      <span class="trusted-by-text">Trusted by:</span>
      <ul>
        <img
          class="trust-facebook"
          src="https://res.cloudinary.com/pivarr/image/upload/v1638461625/trustedBy/facebook.31d5f92_co1oi9.png"
        />
        <img
          class="trust-google"
          src="https://res.cloudinary.com/pivarr/image/upload/v1638461624/trustedBy/google.517da09_nmculq.png"
        />
        <img
          class="trust-netflix"
          src="https://res.cloudinary.com/pivarr/image/upload/v1638461625/trustedBy/netflix.e3ad953_rloyww.png"
        />
        <img
          class="trust-pg"
          src="https://res.cloudinary.com/pivarr/image/upload/v1638461625/trustedBy/pandg.8b7310b_ybptae.png"
        />
        <img
          class="trust-paypal"
          src="https://res.cloudinary.com/pivarr/image/upload/v1638461625/trustedBy/paypal.ec56157_mdfif2.png"
        />
      </ul>
    </div>
    <Carousel-popular :gigs="gigsToShow" />
    <gig-categories />

    <!-- <app-footer /> -->
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
      searchTerm: "",
      populars: ["WebSite Design", "WordPress", "Logo Design", "NFT Art"],
    };
  },
  methods: {
    setSearch() {
      // console.log('searchTerm-piverapp', this.searchTerm);
      this.$store.dispatch({ type: "setSearch", searchTerm: this.searchTerm });
      this.$router.push({
        path: "explore",
        query: { search: this.searchTerm },
      });
    },
  },
  computed: {
    gigsToShow() {
      return this.$store.getters.gigs;
    },
    popularGigsToShow() {
      // console.log(this.$store.getters.popularGigsToShow);
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

