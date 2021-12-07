<template>
  <div class="carousel-continer main-layout">
    <h2>Popular professional services</h2>
    <VueSlickCarousel
      v-bind="settings"
      :style="{ height: '350px', width: '100%' }"
      class="carousel"
    >
      <template>
        <div class="custom-arrow"></div>
      </template>
      <div
        class="imgage-contariner"
        v-for="popularPro in professionalList"
        :key="popularPro._id"
      >
        <h4 class="popular-label">
          <small>{{ popularPro.des }}</small>
          {{ popularPro.name }}
        </h4>

        <img
          @click="routeExplore"
          class="popular-img"
          :src="popularPro.img"
          alt=""
        />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
// import caroselSmall from "../cmps/carousel-small.vue";

export default {
  props: ["carosel"],
  data() {
    return {
      popularPros: [],
      a: "=>",

      settings: {
        arrows: true,
        infinite: true,
        variableWidth: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        speed: 1000,
        // initialSlide: 0,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToScroll: 4,
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToScroll: 3,
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
  methods: {
    routeExplore() {
      this.$router.push("/explore");
    },
  },
  computed: {
    professionalList() {
      console.log(this.$store.getters.professional);
      return this.$store.getters.professional;
    },
  },
  components: { VueSlickCarousel },
};
</script>

<style>
</style>