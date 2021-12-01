<template>
 <section >
    <h2>Popular professional services</h2>
    <div class="populars-container">
      <li v-for="gig in gigs" class="populars-list" :key="gig._id" >
        <router-link :to="'/explore'">
        <div class="popular-card">
          <h2>{{gig.tags[0]}}</h2>
        </div>
       </router-link>
      </li>
    </div>
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
.populars-container{
  display: flex;
}
.populars-container li{
    margin-right: 10px;
    list-style-type: none;
}
</style>