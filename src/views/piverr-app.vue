<template>
  <section class="homepage">
    <appHeader class="home-header" />
    <div class="hero-container">
      <form class="home-search-box">
        <input type="search" placeholder='Try "building mobile app"' value>
        <button>Search</button>
      </form>
    </div>
    <div class="trust-contaner">
      Trusted by: facebook Google NETFLIX P&#38;G PayPal
    </div>
    <Carousel-popular />
    <popular-gigs :gigs="gigsToShow" />
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
  methods: {
    
  },
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
.home-search-box {
  width: 650px;
  position: absolute;
  top: 36%;
  left: 10.5%;
  font: 400 16px/24px Macan, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #62646a;
  display: flex;
}

.home-search-box input {
  outline: none;
  border-radius: 5px 0px 0px 5px;
  box-sizing: border-box;
  font-size: 16px;
  height: 48px;
  padding-left: 44px;
  margin-bottom: 0;
  border: 1px solid #c5c6c9;
  width: 500px;
}
.home-search-box button {
  text-decoration: none;
  border: none;
  border-radius: 0px 5px 5px 0px;
  background-color: #1dbf73;
  color: #fff;
  height: 48px;
  padding: 12px 24px;
}
.home-search-box button:hover {
  background-color: #169e5e;
}
/* .home-header {
  position: fixed;
} */
.hero-container {
  width: 100%;
  height: 85vh;
  overflow: hidden;
  background-image: url("https://res.cloudinary.com/pivarr/image/upload/v1638379118/hero/1_c9jihn.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* animation: change 10s infinite ease-in-out; */

  animation: infinite fade 36s cubic-bezier(0.91, 0.04, 0.9, 1);
  /* animation: fade 2s linear ; */
}
@keyframes fade {
  0% {
    background-image: url("https://res.cloudinary.com/pivarr/image/upload/v1638379118/hero/1_c9jihn.jpg");
  }
  20% {
    background-image: url("https://res.cloudinary.com/pivarr/image/upload/v1638387421/hero/2_i0r5wm.jpg");
  }
  40% {
    background-image: url("https://res.cloudinary.com/pivarr/image/upload/v1638379447/hero/3_jwygvs.jpg");
  }
  60% {
    background-image: url("https://res.cloudinary.com/pivarr/image/upload/v1638379344/hero/4_hfzpys.jpg");
  }
  80% {
    background-image: url("https://res.cloudinary.com/pivarr/image/upload/v1638379631/hero/5_vajd7a.jpg");
  }
}
.trust-contaner {
  height: 11vh;
  color: #62646a;
  font: 400 16px/24px Macan, Helvetica Neue, Helvetica, Arial, sans-serif;
  background: rgb(250, 250, 250);
  text-align: center;
}
</style>
