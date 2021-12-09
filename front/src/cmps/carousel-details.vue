<template>
  <section>
    <template>
      <VueSlickCarousel
        v-bind="bigSettings"
        ref="c1"
        :asNavFor="$refs.c2"
        :style="{ height: '450px', width: '100%' }"
      >
        <img v-for="img in gig.imgUrl" :key="img" :src="img" alt="" />
      </VueSlickCarousel>
    </template>
    <template>
      <div class="img-datils">
        <VueSlickCarousel ref="c2" :asNavFor="$refs.c1" v-bind="smallSettings">
          <img
            class="details-img"
            :style="{ height: '120px', width: '50px' }"
            v-for="img in gig.imgUrl"
            :key="img"
            :src="img"
            alt=""
          />
        </VueSlickCarousel>
      </div>
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
        adaptiveHeight: true,
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