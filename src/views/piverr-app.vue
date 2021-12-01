<template>
  <section class="homepage">
    <appHeader />
    <div class="hero-container">
      <h1>Hero pictures</h1>
      <img
        src="https://res.cloudinary.com/pivarr/image/upload/v1638379631/hero/4_vajd7a.jpg"
        alt=""
      />
    </div>
    <div class="trust-contaner">
      Trusted by: facebook Google NETFLIX P&#38;G PayPal
    </div>
    <popular-gigs :gigs="popularGigsToShow" />
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
import { uploadImg } from "../services/cloudinary.service";
import { gigService } from "../services/gig.service.js";

export default {
  name: "Home",
  data() {
    return {
      heroImgs: [],
    };
  },
  methods: {},
  computed: {
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
  },
};
</script>
