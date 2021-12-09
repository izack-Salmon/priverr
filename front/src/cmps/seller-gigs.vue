
<template>
 <section>
    
      <div class="gig-seller-card">
          <img class="gig-img" :src="gig.imgUrl[0]" />
      
         <p class="gig-seller-title" >
           {{ gig.title }}
         </p>

      <div class="gig-seller-btns flex space-between">
        <button @click="onRemoveGig" class="btn-delete">
            <i class="el-icon-delete"></i>
        </button>
       
        <router-link :to="`/user/${gig.owner._id}/editGig/${gig._id}`">
          <span class="edit-span-btn"> 
              <i class="el-icon-edit"></i>
              Edit 
          </span>
        </router-link>
      </div>
    </div>

   
 </section>
</template>

<script>
export default {
    name: 'sellerGigs',
    props: {
    gig: Object,
    },
    methods: {
        onRemoveGig() {
            this.$store.dispatch({ type: "removeGig", gigId: this.gig._id});
            this.$emit('loadGigs')
        }
    },

}
</script>
