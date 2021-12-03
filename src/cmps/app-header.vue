<template>
  <section>
    <!-- <div class="main-header flex align-center space-between"> -->
    <div :class="['main-header','main-layout',{ white: isHome }]">
      <div class="logo">
        <router-link :class="{ white: isHome }" :to="'/'">
        <img src="">
        Piverr
          <span>.</span>
          </router-link>
        <!-- <router-link :to="'/'">
          <img src="https://res.cloudinary.com/pivarr/image/upload/v1638461660/logopiver/Piverr_Logo_lzsrld.png"/>
        </router-link> -->
      </div>
      <div :class="['nav-bar',{ white: isHome }]">
        <router-link :to="'/explore'">Explore</router-link>
        <span>Become a Seller</span> <span>Sign in</span>
        <!-- <div> -->
        <!-- <div class="join-box"> -->
        <button>Join</button>
        <!-- </div> -->
        <div hidden class="avatar">avatar</div>
        <!-- </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isHome: true,
    };
  },
  watch: {
    $route({ name }) {
      this.isHome = name === "Home" ? true : false;
    },
  },
};
</script>
