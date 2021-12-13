<template>
  <div class="row main-layout">
    <section class="info-column">
      <div class="user-card">
        <div class="user-profile">
          <avatar
            @click.native="goToUserPage"
            class="home-Avater"
            :size="150"
            :src="user.imgUrl"
          ></avatar>
          <!-- <avatar
            v-else
            @click.native="goToUserPage"
            class="home-Avater"
            :size="150"
            :username="userName"
          ></avatar> -->
          <div class="user-details-name">{{ user.fullname }}</div>
          <ul class="user-stats">
            <li class="location">
              <span>
                <span
                  class="user-stats-icon"
                  style="width: 13px; height: 13px; fill: #62646a"
                  aria-hidden="true"
                  ><svg
                    width="12"
                    height="16"
                    viewBox="0 0 12 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M5.38338 15.6772C0.842813 9.09472 0 8.41916 0 6C0 2.68628 2.68628 0 6 0C9.31372 0 12 2.68628 12 6C12 8.41916 11.1572 9.09472 6.61662 15.6772C6.31866 16.1076 5.68131 16.1076 5.38338 15.6772ZM6 8.5C7.38072 8.5 8.5 7.38072 8.5 6C8.5 4.61928 7.38072 3.5 6 3.5C4.61928 3.5 3.5 4.61928 3.5 6C3.5 7.38072 4.61928 8.5 6 8.5Z"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="12" height="16"></rect>
                      </clipPath>
                    </defs></svg></span
                >From</span
              >
              <b>Israel</b>
            </li>
            <li class="member-since">
              <span
                ><span
                  ><span
                    class="lFICM06 user-stats-icon"
                    style="width: 13px; height: 13px; fill: #62646a"
                    aria-hidden="true"
                    ><svg
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 8C9.20938 8 11 6.20937 11 4C11 1.79063 9.20938 0 7 0C4.79063 0 3 1.79063 3 4C3 6.20937 4.79063 8 7 8ZM9.8 9H9.27812C8.58437 9.31875 7.8125 9.5 7 9.5C6.1875 9.5 5.41875 9.31875 4.72188 9H4.2C1.88125 9 0 10.8813 0 13.2V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V13.2C14 10.8813 12.1187 9 9.8 9Z"
                      ></path></svg></span
                  >Member since</span
                ></span
              ><b>Nov 2021</b>
            </li>
          </ul>
        </div>
      </div>
      <div class="user-gigs">
        <section class="seller-gigs">
          <h3><span> Active Gigs </span></h3>
          <div v-if="gigs" class="active-gigs">
            <div v-for="gig in gigs" :key="gig._id">
              <seller-gigs :gig="gig" @loadGigs="loadUserGigs" />
            </div>
          </div>
        </section>
      </div>
    </section>
    <div class="create-a-gig">
      <p v-if="!gigs">
        It seems that you don't have any active Gigs. Get selling!
      </p>
      <p v-if="gigs">
        You have <span>{{ gigs.length }}</span> active gigs.
      </p>
      <button @click="goToEditGig" class="become-seller">
        Create a New Gig
      </button>
    </div>
    <div class="order-grid-box">
      <order-list v-if="orders" :orders="orders" />
    </div>
  </div>
</template>

<script>
import orderList from "../cmps/order-list.vue";
import SellerGigs from "../cmps/seller-gigs.vue";
import { socketService } from "../services/socket.service";
import Avatar from "vue-avatar";
export default {
  data() {
    return {
      user: "",
      gigs: "",
      orders: "",
      // userGigs: "",
    };
  },
  async created() {
    this.user = this.$store.getters.logginUser;
    await this.$store.dispatch({ type: "loadGigs" });
    await this.loadUserGigs();
    await this.$store.dispatch({ type: "loadOrders" });
    this.ordersToShow();
    socketService.on("purchase", this.socketCheck);
    // this.connect();
  },
  methods: {
    goToEditGig() {
      this.$router.push(`/user/${this.user._id}/editGig`);
      // console.log("hi");
    },
    ordersToShow() {
      // console.log("go store");
      this.orders = JSON.parse(JSON.stringify(this.$store.getters.orders));
    },

    async loadUserGigs() {
      this.gigs = this.$store.getters.gigs;
      console.log("gigs", this.gigs);
      this.gigs = await this.gigs.filter(
        (gig) => gig.owner._id === this.user._id
      );
      console.log("this.userGigs", this.gigs);
    },
  },
  watch: {
    userId: {
      async handler() {
        // await this.$store.dispatch({ type: "", user: this.user });
        // this.setGig();
      },
      immediate: true,
    },
  },
  computed: {
    userId() {
      return this.$route.params.id;
    },
  },
  components: { Avatar, orderList, SellerGigs },
};
</script>

<style>
</style>