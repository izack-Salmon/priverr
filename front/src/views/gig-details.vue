<template>
  <section v-if="gig" class="gig-details">
    <!-- <div class="page-nav">
      <nav class="page-nav-container">
        <ul class="flex">
          <li>
            <a href="">Overview</a>
          </li>
          <li>
            <a href="">Description</a>
          </li>
          <li>
            <a href="">About The Seller</a>
          </li>
          <li>
            <a href="">Reviews</a>
          </li>
        </ul>
      </nav>
    </div> -->
    <div class="sticky-wrapper main-layout">
      <main class="gig-page-holder main-layout">
        <div class="gig-details-container left-float">
          <h1 class="gig-details-title">{{ gig.title }}</h1>

          <div class="seller-overview">
            <div class="flex ">
              <div class="details-avatar">
                <img :src="gig.owner.imgUrl" />
              </div>
              <div class="profile-name">
                <a href="">{{ gig.owner.fullname }}</a>
                <span class="gig-owner-level">{{ gig.owner.level }}</span>
              </div>
            </div>
            <div class="mid-liner righty">|</div>
            <div class="flex res-pad-left">
              <gigStars :gig="gig" />
              <span class="rating-amount">(1k+)</span>
            </div>
            <div class="mid-liner righty">|</div>
            <span class="que-num">27 Orders in Queue</span>
          </div>
          <div class="line"></div>

          <div class="seller-main-pic">
            <caroselDatails ref="c1" :gig="gig" />
            <caroselSmall ref="c2" :gig="gig" />

            <!-- <img :src="gig.imgUrl[0]" /> -->
          </div>

          <!-- <div class="small-carusell"></div> -->

          <div class="covert-purchase">
            <gig-purchase
              :gig="gig"
              @purchaseMsg="purchaseMsg"
              @openLogin="showLogin"
              @sendOrder="sendOrder"
            />
          </div>
          <about-the-seller :gig="gig" />
          <gig-review-graph v-if="owner" :owner="owner" />
          <gig-reviews-list v-if="owner" :owner="owner" />
        </div>
        <div class="side-bar-content stickit">
          <div class="invoicing-box">
            <div class="purchase-details-holder">
              <gig-purchase
                :gig="gig"
                @purchaseMsg="purchaseMsg"
                @openLogin="showLogin"
                @sendOrder="sendOrder"
              />
            </div>
          </div>
          <div class="contact-box">
            <button class="contact-btn">Contact Seller</button>
          </div>
        </div>
      </main>
    </div>
    <section
      v-if="isPurchase"
      :class="[
        'sign-in',
        { 'fade-in': isPurchase },
        { 'fade-out': !isPurchase },
      ]"
      @click="exitPurchase($event)"
    >
      <div class="sing-in-box">
        <div class="sing-in-contant">
          <h4>Order Completed!</h4>
          <p>
            Order: #FO68C780E5A9
            <span>Item: {{ gig.discription }}</span>
          </p>
          <div>
            <p>Total: ${{ gig.price }}</p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import gigPurchase from "../cmps/gig-purchase.vue";
import gigStars from "../cmps/gig-stars.vue";
import gigReviewsList from "../cmps/gig-reviews-list.vue";
import caroselDatails from "../cmps/carousel-details.vue";
import caroselSmall from "../cmps/carousel-small.vue";
import aboutTheSeller from "../cmps/about-the-seller.vue";
import gigReviewGraph from "../cmps/gig-review-graph.vue";
import { socketService } from "../services/socket.service";
export default {
  components: {
    gigPurchase,
    gigStars,
    gigReviewsList,
    caroselDatails,
    caroselSmall,
    aboutTheSeller,
    gigReviewGraph,
  },
  name: "gigDetails",
  data() {
    return {
      isPurchase: false,
      gig: "",
      owner: "",
      order: "",
    };
  },
  created() {},
  watch: {
    gigId: {
      async handler() {
        await this.$store.dispatch({ type: "getGigByid", gigId: this.gigId });
        this.setGig();
      },
      immediate: true,
    },
  },
  methods: {
    async setGig() {
      this.gig = await this.$store.getters.currGig;
      await this.$store.dispatch({
        type: "getUserReviews",
        ownerId: this.gig?.owner._id,
      });
      this.owner = this.$store.getters.currOwner;
    },
    sendOrder() {
      this.order = {
        createdAt: Date.now(),
        status: "pending",
        seller: {
          _id: this.owner._id,
        },
        gig: {
          _id: this.gig._id,
          title: this.gig.title,
          price: this.gig.price,
          imgUrl: this.gig.imgUrl[0],
        },
      };
      // console.log("this.oder", this.order);
      // socketService
      // socketService.on("order-added", (order) => {
      //   // console.log(order);
      //   // showSuccessMsg(`Order was added, check it out ${order.seller._id}`);
      // });
      this.$store.dispatch({ type: "addOrder", order: this.order });
    },
    purchaseMsg() {
      this.isPurchase = true;
    },
    async exitPurchase(ev) {
      // await this.$store.dispatch({ type: "getGigByid", gigId: this.gigId });
      if (ev.srcElement.localName === "section") {
        this.isPurchase = false;
      }
    },
    showLogin() {
      console.log("2nd");
      this.$emit("openLogin");
    },
  },
  computed: {
    gigId() {
      // if (this.$route.params.id) {
      return this.$route.params.id;
      // }
    },
  },
};
</script>
