<template>
  <!-- <section class=""> -->
    <div class="gig-list-container">
      <div class="gig-list">
      <div v-for="(gig, idx) in gigs" :key="idx">
        <gig-preview :gig="gig"></gig-preview>
      </div>
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
