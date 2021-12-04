<template>
  <section>
    <!-- <div class="main-header flex align-center space-between"> -->
    <div :class="['main-header', 'main-layout', { white: isHome }]">
      <div class="nav-warp">
        <div class="logo-warp">
          <router-link :class="{ white: isHome }" :to="'/'">
            <img
              v-if="isHome"
              class="logo"
              src="../assets/imgs/Piverr_w_Logo.png"
              alt="logo"
            />
            <img
              v-else
              class="logo"
              src="../assets/imgs/Piverr_Logo.png"
              alt="logo"
            />
          </router-link>
        </div>
        <div
          class="nav-search"
          :style="{ visibility: !isHome ? 'visible' : 'hidden' }"
        >
          <form class="search-form" action="">
            <input type="search" placeholder="Find Services" />
            <button>Search</button>
          </form>
        </div>
      </div>
      <div :class="['nav-bar', { white: isHome }, { 'hover-nav': !isHome }]">
        <router-link :to="'/explore'">Explore</router-link>
        <span>Become a Seller</span> <span>Sign in</span>
        <!-- <div> -->
        <!-- <div class="join-box"> -->
        <button :class="[{ 'btn-white': isHome }, { 'btn-green': !isHome }]">
          Join
        </button>
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
  created() {
    this.isHome = (this.$route.name === "Home") ? true : false;
  },
  watch: {
    $route({ name }) {
      this.isHome = name === "Home" ? true : false;
    },
  },
methods: {

},

  computed: {

  },
};
</script>

 