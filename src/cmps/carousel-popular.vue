<template>
  <div class="carousel-continer">
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
.carousel-continer button {
  width: 3rem;
  height: 3rem;
  background: #fefeff;
  border-radius: 1.625rem;
  z-index: 3;
}
.popular-label {
  position: absolute;
  /* top: 100px; */
  /* position: relative; */
  z-index: 1;
  color: #fff;
  padding: 16px;
  font-size: 24px;
  line-height: 130%;
}
.popular-label small {
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  display: block;
}
.carousel-continer {
  margin: auto;
  width: 67%;
}
.slick-prev:before,
.slick-next:before {
  /* color: red !important;  */
  size: 48px;
  border-radius: 30px;
}

.slick-arrow {
  position: absolute;
  display: block;
  color: #000;
}
.slick-slide {
  margin: 0 18px;
  /* padding: 0 18px; */
}
.slick-list {
  padding-right: 50px;
  margin: 0 -181px;
}
.popular-img {
  width: 252px;
  /* height: 345px; */
}
.imgage-contariner :hover {
  -webkit-transition: opacity 0.3s ease-in-out;
  cursor: pointer;
  opacity: 0.85;
}
</style>