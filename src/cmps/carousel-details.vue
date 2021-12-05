<template>
  <section>
    <template>
      <VueSlickCarousel
        v-bind="bigSettings"
        ref="c1"
        :asNavFor="$refs.c2"
        :style="{ height: '430px', width: '100%' }"
      >
        <img v-for="img in gig.imgUrl" :key="img" :src="img" alt="" />
      </VueSlickCarousel>
    </template>
    <template>
      <VueSlickCarousel ref="c2" :asNavFor="$refs.c1" v-bind="smallSettings">
        <img
          :style="{ height: '60px', width: '15%' }"
          v-for="img in gig.imgUrl"
          :key="img"
          :src="img"
          alt=""
        />
      </VueSlickCarousel>
    </template>
  </section>
</template>


<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  props: ["gig"],
  data() {
    return {
      bigSettings: {
        infinite: true,
        focusOnSelect: true,
      },
      smallSettings: {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    };
  },
  components: { VueSlickCarousel },
};
</script>

<style>
</style>