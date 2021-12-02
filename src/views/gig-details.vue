<template>
  <section v-if="gig" class="gig-details">
    <div class="page-nav">
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
    </div>
    
  <main class="gig-page-holder">

    <div class="gig-details-container">

      <h1 class="gig-details-title">{{ gig.title }}</h1>

      <div class="seller-overview">
        <div class="details-avatar"> 
          <img :src="gig.owner.imgUrl" />
        </div>
        <div class="profile-name">
        <a href="">{{ gig.owner.fullname }}</a>
          <span>level 3 seller</span>
        </div>
         |<span> ⭐4.8</span>
          <span>(1k+)</span>|
      </div>

      <div class="seller-main-pic">
          <img :src="gig.imgUrl[0]"/>  
      </div>

      <div class="small-carusell"></div>
      
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
        
    </div>
  
      <div class="side-bar-content">
        <gig-purchase :gig="gig" @purchaseMsg="purchaseMsg" />
    
        <div v-if="isPurchase">

          <h4>Order Complited</h4>
          <p>
            Order: #FO68C780E5A9
            <span>Item: {{ gig.discription }}</span>
          </p>

          <div>
            <p>Total: ${{ gig.price }}</p>
          </div>
        </div>
      </div>

  </main>

  </section>
</template>

<script>
import gigPurchase from "../cmps/gig-purchase.vue";
export default {
  components: { gigPurchase },
  name: "gigDetails",
  data() {
    return {
      isPurchase: false,
    };
  },
  created() {
    this.getGigById();
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
    purchaseMsg() {
      this.isPurchase = true;
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