<template>
  <section class="homepage">
    <appHeader/>
    <div class="hero-container">
      <h1>Hero pictures</h1>
    </div>
    <div class="trust-contaner">
      Trusted by: facebook Google NETFLIX P&#38;G PayPal
    </div>
    <popular-gigs/>
    <gig-categories/>
    <app-footer/>
  </section>
</template>

<script>
// @ is an alias to /src

import popularGigs from '../cmps/popular-gigs.vue'
import GigCategories from '../cmps/gig-categories.vue'
import appHeader from '../cmps/app-header.vue'
import appFooter from '../cmps/app-footer.vue'
import cloudinary from '../services/cloudinary.service.js'
import { gigService } from "../services/gig.service.js";

export default {
  name: "Home",
  data(){
    return{
      heroImgs: []
    }
  },
  components: {
    popularGigs,
    GigCategories,
    appHeader,
    appFooter,
  },
  created() {
    this.$store.dispatch({ type: "loadGigs" });
  },
};
</script>
