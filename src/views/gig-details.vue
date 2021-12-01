<template>
  <section v-if="gig" class="gig-details">
    <h1>gig details</h1>
    <div class="gig-details-container"></div>
    <h1>{{ gig.title }}</h1>

    <div class="seller-overview">
      <img src="gig.owner.imgUrl" />
      <div>
        <a href="">{{ gig.owner.fullname }}</a>
        <span>level 3 seller</span>
      </div>

      <div>
        <h2>About The Seller</h2>
        <div class="seller-overview">
          <img src="gig.owner.imgUrl" />
          <div>
            <a href="">{{ gig.owner.fullname }}</a>
            <p>Professional Logo Designer</p>
            <span>⭐4.8</span>
            <span>(1k+)</span>
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
    </div>
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
    // this.getGigById();
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