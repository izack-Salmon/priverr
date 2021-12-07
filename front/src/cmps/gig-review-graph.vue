<template>
  <section>
      <h1>Hi Im A Graph</h1>
      <header class="graph-header-review">
        <div class="graph-header-details">
          <h2>
            <span>{{owner.reviews.length}}</span>
            <span>Reviews</span>
            
          </h2>
        </div>
      </header>
  </section>
</template>

<script>

import gigStars from './gig-stars.vue'
export default {
    props:{ 
    owner :Object,
  },
  components:{
    gigStars,
  },
  

}
</script>

<style>

</style>