<template>
  <section class="gig-details">
    <h1>gig details</h1>
    <div class="gig-details-container">
      <h1>{{ gig.title }}</h1>

      <div class="seller-overview">
        <img src="gig.owner.imgUrl" />
        <div>
          <a href="">{{ gig.owner.fullname }}</a>
          <span>level 3 seller</span>
        </div>

        <div>
          <div class="gig-rating">
            <span>⭐4.8</span>
            <span>(1k+)</span>
          </div>
          <span> 80 Orders in Queue </span>
        </div>
      </div>
      <div>img carussle</div>
      <h2>What people loved about this seller</h2>
      <a href="">See all reviews</a>
      <div>review carussle</div>
      <div>
        <h2>About This Gig</h2>
        <p>{{ gig.description }}</p>
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
    <gig-purchase :gig="gig" />
  </section>
</template>

<script>
import gigPurchase from "../cmps/gig-purchase.vue";
export default {
  components: { gigPurchase },
  name: "gigDetails",
  created() {
    this.getGigById();
  },
  mounteds: {
    getToyById() {
      var gigId = this.$route.params.id;
      //watch?
    },
  },
};
</script>

<style>
</style>