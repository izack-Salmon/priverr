<script>
// HomePage
    setSearch(){
      console.log('searchTerm-piverapp', this.searchTerm);
      this.$store.dispatch({ type: "setSearch", searchTerm :this.searchTerm });
    }  


</script>

<template>
 <!-- Explore -->
  <section>
    <div class="explore-title main-layout">{{ pagetitle }}</div>
    <gig-filter class="main-layout" @filter='filter' />
    <gig-list class="main-layout" :gigs="gigsToShow" />
  </section>
</template>

<script>
// import gigService from "../services/gig-service.js"
import gigFilter from "@/cmps/gig-filter.vue";
import gigList from "@/cmps/gig-list.vue";
import { gigService } from "../services/gig.service.js";

export default {
  name: "explore",
  data() {
    return {
      // pagetitle: "Explore",
    };
  },
  created() {
    },
    pagetitle() {
      return this.$store.getters.exploreTitle;
    }
  },
  methods: {
    filter(filterBy) {
      console.log('filterBy', filterBy);
      this.$store.dispatch({ type: "setFilterBy", filterBy });

    }
  },
  components: {
    gigList,
    gigFilter,
  },
};
</script>

<template>
  <section v-if="gig" class="gig-details">
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
            </div><div class="mid-liner">|</div>
            <gigStars :gig="gig" />
            <span class="rating-amount">(1k+)</span>
            <div class="mid-liner">|</div>
            <span class="que-num">27 Orders in Queue</span>
          </div>
          <div class="line"></div>

          <div class="seller-main-pic">
            <caroselDatails ref="c1" :gig="gig" />
            <!-- <caroselSmall ref="c2" :gig="gig" /> -->

            <!-- <img :src="gig.imgUrl[0]" /> -->
          </div>

          <!-- <div class="small-carusell"></div> -->

          <div class="covert-purchase">
           
            <gig-purchase :gig="gig" @purchaseMsg="purchaseMsg" />
          </div>
          <about-the-seller :gig="gig"/>
          <gig-review-graph v-if="owner" :owner="owner"/>
          <gig-reviews-list v-if="owner" :owner="owner" />
        </div>
        <div class="side-bar-content stickit">
          <div class="invoicing-box">
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
import aboutTheSeller from "../cmps/about-the-seller.vue"
import gigReviewGraph from "../cmps/gig-review-graph.vue"
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
    gigId() {
      // if (this.$route.params.id) {
      return this.$route.params.id;
      // }
    },
  },
};
</script>


