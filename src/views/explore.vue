<template>
  <section>
    <h1>hi</h1>
    <gig-list :gigs="gigs" />
  </section>
</template>

<script>
// import gigService from "../services/gig-service.js"
import giglist from "../cmps/gig-list.vue";

export default {
  name: explore,
  components: {
    giglist,
  },
  data(){

  },
  created(){},
  mounteds:{},
};
</script>