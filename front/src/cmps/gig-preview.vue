<template>
  <section class="gig-preview">
    <div class="gig-card">
      <!-- <img class="gig-img" :src="gig.imgUrl[0]" contextmenu=""/> -->
                <img class="gig-img" @click="goToDetails" :src="currentImage" alt="">
                <div class="actions">
                    <span @click="prevImage" class="arrow prev">
                    </span>
                    <span @click="nextImage" class="arrow next">
                    </span>
                </div>

      <div class="seller-info flex align-center">
        <img :src="gig.owner.imgUrl" />
        <div class="seller-identifiers">
          <div class="seller-name">
          <a href="">{{ gig.owner.fullname }}</a>
          </div>
          <span class="seller-level">{{ gig.owner.level }}</span>
        </div>
      </div>
      
      <router-link class="gig-title" :to="'/gig/details/' + gig._id">
        {{ gig.title }}
      </router-link>

      <div class="gig-rating">
        <span class="star">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1400" width="15" height="15">
          <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
          </path></svg>
        {{ gig.owner.rate }}</span>
       <span v-if="gig.owner.orderNum < 950">({{gig.owner.orderNum}})</span> 
        <span v-else>(1k+)</span>
      </div>

      <div class="gig-footer flex space-between">
        <span @click="toggleHeart" :class="['heart-icon',{'heart-Liked':isLiked}]" aria-hidden="true" style="width: 16px; height: 16px;">
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z">
          </path>
          </svg>
          </span>
        <router-link :to="'/gig/details/' + gig._id">
          <span class="text-price"> starting at </span>
          <span class="price-span"> ${{ gig.price }}</span>
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
    idx: Number,
  },
  data(){
    return {
       activeImage: 0,
       isLiked: false,
    }
  },
  computed: {
    currentImage() {
                return this.gig.imgUrl[this.activeImage];
            },
  },
  methods: {
    toggleHeart() {
      this.isLiked = !this.isLiked;
    },
    goToDetails(){
      this.$router.push(`/gig/details/${this.gig._id}`);
    },
     nextImage() {
                var active = this.activeImage + 1;
                if(active >= this.gig.imgUrl.length) {
                    active = 0;
                }
                this.activateImage(active);
            },
            // Go backwards on the images array 
            // or go at the last image
            prevImage() {
                var active = this.activeImage - 1;
                if(active < 0) {
                    active = this.gig.imgUrl.length - 1;
                }
                this.activateImage(active);
            },
              activateImage(imageIndex) {
                this.activeImage = imageIndex;
            }
  }
};
//  color:#f74040;

</script>

<style>
</style>