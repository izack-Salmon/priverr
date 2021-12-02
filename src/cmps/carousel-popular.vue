<template>
  <div class="carousel-continer main-layout">
    <h2>Popular professional services</h2>
    <VueSlickCarousel
      :variableWidth="true"
      v-bind="settings"
      :style="{ height: '350px', width: '100%' }"
      class="carousel"
    >
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

export default {
  props: ["carosel"],
  data() {
    return {
      popularPros: [],

      settings: {
        arrows: true,
        infinite: true,
        responsive: [1000, 3],
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        // dots: true,
        // fade: true,
        // focusOnSelect: true,
        // initialSlide: 2,
        // accessibility: true,
        // slidesPerRow: 5,
        // touchThreshold: 5,
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