<template>
  <section :class="[{ 'bgc-white': !isHome },{'gray-border': !isHome}]">
    <!-- <div class="main-header flex align-center space-between"> -->
    <div :class="['main-header', 'main-layout', { white: isHome },{ 'bgc-white': !isHome }]">
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
          :class="['nav-search',{'srch-visible':!isHome},{'srch-hidden':isHome}]"
        >
          <form class="search-form" @input="setSearch">
            <svg
              class="search-svg-header"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z"
              ></path>
            </svg>
            <input type="search" placeholder="Find Services" v-model="searchTerm" />
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
      searchTerm: null,
      isHome: true,
      scrollPosition: null,
    };
  },
  created() {
    this.isHome = this.$route.name === "Home" ? true : false;
  },
  // destroy(){
  //       window.removeEventListener('scroll', this.updateScroll)
  // },
  watch: {
    $route({ name }) {
      this.isHome = name === "Home" ? true : false;
    },
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      this.isHome = ((this.scrollPosition > 10) && (this.$route.name === "Home")) ? false : true;
      if ((this.scrollPosition < 50) && (this.$route.name !== "Home")){
        this.isHome = false
      }
    },
    setSearch(){
      console.log('this.searchTerm', this.searchTerm);
            this.$emit("setSearch", this.searchTerm);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  computed: {},
};
</script>

  