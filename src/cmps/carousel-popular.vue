<template>
  <div>
    <VueSlickCarousel
      :variableWidth="true"
      v-bind="settings"
      ;slidesToShow:
      5,
      :style="{ height: '372px' }"
      class="carousel"
      :arrows="true"
      :dots="true"
    >
      <div class="divq" v-for="img in images" :key="img">
        <img class="img" :src="img" alt="" />
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
      settings: {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        accessibility: true,
        // centerMode: true,
        speed: 500,
        slidesToShow: 5,
        // centerPadding: "10px",
        slidesToScroll: 5,
        // slidesPerRow: 5,
        // touchThreshold: 5,
      },

      images: [
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png",
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png",
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png",
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png",
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png",
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png",
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png",
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png",
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png",
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png",
      ],
    };
  },
  components: { VueSlickCarousel },
};
</script>

<style>
.slick-track {
}
.slick-slide {
  margin: 0 18px;
  /* padding: 0 18px; */
}
.slick-list {
  padding-right: 50px;
  /* margin: 0 -27px; */
}
.img {
  width: 288px;
  /* height: 345px; */
}
.carousel {
  /* width: 89%; */
  /* width: 288px; */
  /* padding: 0 18px; */
}
.carousel{

}
/* .carousel img{
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  cursor: pointer;
}  */

</style>