<template>
  <section class="gig-preview">
    <div class="gig-card">
      <img src="gig.imgUrl" />
      <div class="seller-info">
        <img src="gig.owner.imgUrl" />
        <div>
          <a href="">{{ gig.owner.fullname }}</a>
          <span>level 3 seller</span>
        </div>
        <router-link :to="'/gig/details/' + gig._id">
          {{ gig.title }}
        </router-link>

        <div class="gig-rating">
          <span>⭐4.8</span>
          <span>(1k+)</span>
        </div>
        
        <div class="gig-footer">
          <span>🤍</span>
          <router-link :to="'/gig/details/' + gig._id">
            <span>STARTING AT</span>
            <span>{{ gig.price }}</span>
          </router-link>
        </div>
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