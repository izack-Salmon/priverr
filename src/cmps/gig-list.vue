<template>
  <!-- <section class=""> -->
    <div class="gig-list">
      <div v-for="gig in gigs" :key="gig._id">
        <gig-preview :gig="gig"></gig-preview>
      </div>
    </div>
  <!-- </section> -->
</template>

<script>
import gigPreview from "../cmps/gig-preview.vue";

export default {
  name: "gigList",
  props: {
    gigs: Array,
  },
  components: {
    gigPreview,
  },
};
</script>
