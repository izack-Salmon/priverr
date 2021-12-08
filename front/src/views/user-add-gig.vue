<template>
  <section class="main-layout">
    <form class="from-add-gig" action="">
      <label for="">Title</label
      ><el-input
        class="add-gig-input-tilte"
        maxlength="100"
        placeholder="tilte"
        v-model="newGig.title"
      ></el-input>
      <label for="">Price</label
      ><el-input-number
        class="add-gig-input-number"
        v-model="newGig.price"
      ></el-input-number>
      <el-input
        class="add-gig-input-tilte"
        maxlength="10"
        placeholder="tilte"
        v-model="newGig.title"
      ></el-input>
      <label>Days to make</label>
      <el-input-number
        class="add-gig-input-number"
        v-model="newGig.daysToMake"
      ></el-input-number>
      <el-input
        type="textarea"
        :rows="4"
        placeholder="description"
        v-model="newGig.description"
      >
      </el-input>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: "",

      newGig: {
        title: "",
        price: 0,
        imgUrl: "",
        daysToMake: "",
        description: "",
        owner: {
          fullname: "",
          imgUrl: "",
          rate: "",
          level: 0,
        },
      },
    };
  },
  created() {
    this.user = this.$store.getters.logginUser;
    console.log(this.user);
    const { fullname, imgUrl, rate, level } = this.user;
    this.newGig.owner = { fullname, imgUrl, rate, level };
    console.log(this.newGig);
  },
};
</script>

<style>
</style>