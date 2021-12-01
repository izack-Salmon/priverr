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
export default {
  name: "Home",
  components: {
    popularGigs,
    GigCategories,
    appHeader,
    appFooter,
  },
};
</script>
