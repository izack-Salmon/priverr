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
            <div class="details-avatar">
              <img :src="gig.owner.imgUrl" />
            </div>
            <div class="profile-name">
              <a href="">{{ gig.owner.fullname }}</a>
              <span class="gig-owner-level">{{ gig.owner.level }}</span>
            </div>
            <gigStars :gig="gig" />
            | <span>(1k+)</span>|
          </div>
          <div class="line"></div>

          <div class="seller-main-pic">
            <caroselDatails ref="c1" :gig="gig" />
            <!-- <caroselSmall ref="c2" :gig="gig" /> -->

            <!-- <img :src="gig.imgUrl[0]" /> -->
          </div>

          <!-- <div class="small-carusell"></div> -->

          <div class="covert-purchase">
            <div class="invoicing-box">
              <div class="package-container">
                <span>Basic</span>
              </div>
            </div>
            <gig-purchase :gig="gig" @purchaseMsg="purchaseMsg" />
          </div>
          <div class="seller-description">
            <div>
              <p>Professional Logo Designer</p>
              <button>Contact Me</button>
            </div>

            <div>
              <ul>
                <li>From <span>United State</span></li>
                <li>Member since <span>Aug 2011</span></li>
                <li>Avg.response time <span>1 hour</span></li>
                <li>Last delivery <span>about 8 hours</span></li>
              </ul>
            </div>
          </div>
          <gig-reviews-list :owner="getUserReviews"/>
        </div>
        <div class="side-bar-content stickit">
          <div class="invoicing-box">
            <div class="package-container">
              <span>Basic</span>
            </div>
            <div class="purchase-details-holder">
              <gig-purchase :gig="gig" @purchaseMsg="purchaseMsg" />
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
          <h4>Order Complited!</h4>
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
export default {
  components: {
    gigPurchase,
    gigStars,
    gigReviewsList,
    caroselDatails,
    caroselSmall,
  },
  name: "gigDetails",
  data() {
    return {
      isPurchase: false,
    };
  },
  created() {
    // this.getGigById();
    this.getUserReviews();
    
  },
  watch: {
    gigId: {
      handler() {
        this.$store.dispatch({ type: "getGigByid", gigId: this.gigId });
      },
      immediate: true,
    },
  },
  methods: {
    async getUserReviews(){
      await this.$store.dispatch({type:"getUserReviews",ownerId: this.gig.owner._id})
      return this.$store.getters.currOwner
      
    },
    purchaseMsg() {
      this.isPurchase = true;
    },
    exitPurchase(ev) {
      if (ev.srcElement.localName === "section") {
        this.isPurchase = false;
      }
    },
  },
  computed: {
    gig() {
      return this.$store.getters.currGig;
    },
    gigId() {
      return this.$route.params.id;
    },
  },
};
</script>

<style>
</style>