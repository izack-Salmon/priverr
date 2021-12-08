
<template>
 <section>
     <h3>Active Gigs</h3>
    <div v-for="(gig, idx) in gigs" :key="idx">
      <div class="gig-seller-card">
          <img class="gig-img" :src="gig.imgUrl[0]" contextmenu=""/>
      
         <p class="gig-seller-title" >
           {{ gig.title }}
         </p>

      <div class="gig-seller btns flex space-between">
        <button></button>

        <router-link :to=" + gig._id">
          <span class="edit-btn"> Edit </span>
        </router-link>
      </div>
    </div>
 </div>
   
 </section>
</template>

<script>
export default {
    name: 'sellerGigs',
    props: {
    gigs: Array
    },

}
</script>
