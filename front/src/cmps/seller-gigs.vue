
<template>
  <section>
    <div class="gig-seller-card">
      <img class="gig-img" :src="gig.imgUrl[0]" />

      <p class="gig-seller-title">
        {{ gig.title }}
      </p>

      <div class="gig-seller-btns flex space-between">
        <button @click="onRemoveGig" class="btn-delete">
          <i class="el-icon-delete"></i>
        </button>

        <!-- <router-link :to="`/user/${gig.owner._id}/editGig/${gig._id}`"> -->
        <div @click="goToEdit">
          <span class="edit-span-btn">
            <i class="el-icon-edit"></i>
            Edit
          </span>
        </div>
        <!-- </router-link> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "sellerGigs",
  props: {
    gig: Object,
  },
  methods: {
    async onRemoveGig() {
      await this.$store.dispatch({ type: "removeGig", gigId: this.gig._id });
      this.$emit("loadGigs");
    },
    async goToEdit() {
      var gig = await this.$store.dispatch({
        type: "getGigByid",
        gigId: this.gig._id,
      });
      console.log(gig);
      this.$router.push(`/user/${this.gig.owner._id}/editGig/${this.gig._id}`);
    },
  },
};
</script>
