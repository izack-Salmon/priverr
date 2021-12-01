<template>
 <section class="populars-container">
     <li v-for="gig in gigs" class="populars-list" :key="gig._id">
       <router-link :to="'/explore'">
        <div class="popular-card"> 
            <span>{{gig.title}}</span>
        </div>
       </router-link>
     </li>
 </section>
</template>

<script>
export default {
  props: ["gigs"],
  created() {
    console.log(this.gig);
  },

}
</script>

<style>

</style>