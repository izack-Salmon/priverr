<template>
  <VueSlickCarousel>
    <div v-for="img in gig.imgUrl" :key="img">
      {{ img }}
    </div>
  </VueSlickCarousel>
</template>


<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  props: ["gig"],
  components: { VueSlickCarousel },
  computed: {},
};
</script>

<style>
</style>