<template></template>

<script>
export default {
  props: ["gig"],
  data() {
    return {
      smallSettings: {
        infinite: true,
        slidesToShow: 10,
        slidesToScroll: 1,
        edgeFriction: 0.35,
      },
    };
  },
  mounted() {
    console.log(this.$refs);
  },
};
</script>

<style>
a {
}
</style>