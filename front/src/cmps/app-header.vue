<template>
  <section :class="[{ 'bgc-white': !isHome }, { 'gray-border': !isHome }]">
    <!-- <div class="main-header flex align-center space-between"> -->
      <div :class="[{'sidebar-overlay':isMenuOpen},{hide:!isMenuOpen}]" @click="toggleMenu"></div>
    <div
      :class="[
        'main-header',
        'main-layout',
        { white: isHome },
        { 'bgc-white': !isHome },
      ]" >
    <button class="btn-nav-ham side-nav-trigger" @click="toggleMenu">
        <svg  width="23" height="19" viewBox="0 0 23 19"><rect y="16" width="23" height="3" rx="1.5" fill="#555"></rect><rect width="23" height="3" rx="1.5" fill="#555"></rect><rect y="8" width="23" height="3" rx="1.5" fill="#555"></rect>
        </svg>
    </button>
    <div :class="[{sidebar:isMenuOpen},{'hide-sidebar':!isMenuOpen}]">
        <button v-show="!logedInUser" @click="openLogin(true)" class="join-sidebar-btn">
          Join Piverr
        </button>
        <span class="sidebar-link" @click="openLogin(false)" v-if="!logedInUser"> Sign In </span>
        <span class="sidebar-link" v-else @click="logOut"> Sign Out </span>
        <span class="sidebar-link" @click="goToExplore">Explore</span> 
        <h6> General </h6>
        <span :class="[{ white: isHome },'sidebar-link']" @click="goToHome">Home</span>
    </div>
      <div class="nav-warp">
        <div class="logo-warp">
          <router-link :class="{ white: isHome }" :to="'/'">
            <img
              v-if="isHome"
              class="logo"
              src="https://res.cloudinary.com/pivarr/image/upload/c_scale,w_89/v1639142285/piverr_w_upldrh.png"
              alt="logo"
            />
            <img
              v-else
              class="logo"
              src="https://res.cloudinary.com/pivarr/image/upload/c_scale,w_89/v1639142285/piverr_b_o7vyd0.png"
              alt="logo"
            />
          </router-link>
        </div>
        <div
          :class="[
            'nav-search',
            { 'srch-visible': !isHome },
            { 'srch-hidden': isHome },
          ]"
        >
          <form class="search-form">
            <svg
              class="search-svg-header"
              width="16"
              height="16"
              viewBox="0 0 15 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z"
              ></path>
            </svg>
            <input
              type="search"
              placeholder="Find Services"
              v-model="searchTerm"
            />
            <button @click="setSearch">Search</button>
          </form>
        </div>
      </div>
      <div :class="['nav-bar', { white: isHome }, { 'hover-nav': !isHome }]">
        <router-link class="explore-link" :to="'/explore'">Explore</router-link>
        <!-- <span @click="goToExplore" :class="{isExactActive: true}"> Explore </span> -->
        <span class="become-seller-link"> Become a Seller </span> 
        <span class="nav-log-btn" @click="openLogin(false)" v-if="!logedInUser"> Sign In </span>
        <span class="nav-log-btn" v-else @click="logOut"> Sign Out </span>
        <!-- <div> -->
        <!-- <div class="join-box"> -->
        <button
          v-show="!logedInUser"
          @click="openLogin(true)"
          :class="['join-btn',{ 'btn-white': isHome }, { 'btn-green': !isHome }]">
          Join
        </button>
        <!-- </div> -->
        <!-- <div v-if="userName"> -->
        <avatar
          @click.native="goToUserPage"
          class="home-Avater"
          :size="32"
          v-if="logedInUser"
          :username="userName"
        ></avatar>

        <div v-if="notifications" class="notification">
          <span class="notification-number">{{ notifications }}</span>
        </div>
        <!-- <img
          v-if="userName"
          @click.native="goToUserPage"
          v-show="logedInUser"
          class="home-Avater"
          src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/aff6dad2cb21d22c1d19784d58db2f16-1592918782697/4b68bdcb-1355-4e65-b15e-510f19b4bc3b.jpg"
          alt=""
        /> -->
        <!-- </div> -->
      </div>
    </div>
    <div></div>
    <login-pop-up @close="close" :enterjoin="clickedJoin" v-if="loginOpened" />
  </section>
</template>

<script>
import Avatar from "vue-avatar";
import loginPopUp from "../cmps/login-popUp.vue";
export default {
  props: ["isOpen", "notification"],
  data() {
    return {
      searchTerm: null,
      isHome: false,
      scrollPosition: null,
      loginPop: false,
      loginOpened: false,
      clickedJoin: false,
      // notificationsNumber: 0,
      notifications: 0,
      user: "",
      isMenuOpen: false,
    };
  },
  created() {
    this.isHome = this.$route.name === "Home";
    if (window.top && this.$route.name !== "Home") this.isHome = false;
  },
  destroy(){
        window.removeEventListener('scroll', this.updateScroll)
  },
  watch: {
    isOpen: {
      handler() {
        this.loginOpened = this.isOpen;
      },
    },
    $route({ name }) {
      this.isHome = name === "Home";
    },
    notification: {
      handler() {
        this.notifications = this.notification;
        // console.log(this.notification);
      },
    },
    immediate: true,
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;

      this.isHome =
        this.scrollPosition > 10 && this.$route.name === "Home" ? false : true;
      if (this.scrollPosition < 50 && this.$route.name !== "Home")
        this.isHome = false;
      if (this.$route.name !== "Home") this.isHome = false;
    },
    async logOut() {
      this.$store.dispatch({ type: "logout" });
    },
    close() {
      this.loginOpened = false;
      this.$emit("toggleLogin");
    },
    openLogin(isJoin) {
      this.clickedJoin = isJoin;
      // this.clickedJoin = true;
      this.loginOpened = true;
      this.isMenuOpen = false;
    },
    // openSignIn() {
    //   this.clickedJoin = false;
    //   this.loginOpened = true;
    //   this.isMenuOpen = false;
    // },
    setSearch() {
      this.$emit("setSearch", this.searchTerm);
    },
    goToUserPage() {
      // console.log(this.user);
      this.$router.push(`/user/${this.user._id}`);
    },
    goToExplore() {
      this.isMenuOpen = false;
      this.$router.push("/explore");
    },
    goToHome(){
      this.isMenuOpen = false;
      this.$router.push("/")
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
 
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  computed: {
    logedInUser() {
      this.user = this.$store.getters.logginUser;
      // console.log(this.user);
      return this.$store.getters.logginUser;
    },
    userName() {
      return this.$store.getters.logginUser?.username;
    },
  },

  components: { loginPopUp, Avatar },
};
</script>

  