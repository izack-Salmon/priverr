<template>
  <carousel 
    :perPageCustom="[
      [480, 2],
      [768, 3],
      [1060, 5],
    ]"
    class="carousel"
    :speed="1000"
    :per-page="1"
    :loop="true"
  >
    <slide class="carsal img" v-for="car in cars" :key="car">
      <img
        style="   outline: none: padding: 0px 18px;"
        :src="car"
        alt=""
      />
    </slide>
  </carousel>
</template>

<script>
export default {
  props: ["carosel"],
  data() {
    return {
      cars: [
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
};
</script>

<style>
.h {
  position: relative;
}
.carsal img {
  padding: 0px 18px !important;
}
.VueCarousel-slide .carsal img {
  padding: 18px;
  width: 299px;
  height: 200px;
  /* max-height: 345px;
  width: 252px; */
}
.VueCarousel-inner {
  flex-basis: 0;
}
.carousel{

}
.carousel img{
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  cursor: pointer;
}

</style>