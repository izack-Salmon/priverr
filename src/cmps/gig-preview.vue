<template>
  <section class="gig-preview">
    <div class="gig-card">
      <img :src="gig.imgUrl[0]" />
      <div class="seller-info flex align-center">
        <img :src="gig.owner.imgUrl" />
        <div class="seller-identifiers">
          <div class="seller-name">
          <a href="">{{ gig.owner.fullname }}</a>
          </div>
          <span class="seller-level">level 3 seller</span>
        </div>
      </div>
      <router-link class="gig-title" :to="'/gig/details/' + gig._id">
        {{ gig.title }}
      </router-link>

      <div class="gig-rating">
        <span class="star">⭐4.8</span>
        <span>(1k+)</span>
      </div>

      <div class="gig-footer flex space-between">
        <span>🤍</span>
        <router-link :to="'/gig/details/' + gig._id">
          <span>STARTING AT </span>
          <span> ${{ gig.price }}</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "gigPreview",
  props: {
    gig: Object,
  },
};
</script>

<style>
</style>