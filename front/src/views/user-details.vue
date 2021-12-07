<template>
  <div class="row flex">
    <section class="info-column">
      <div class="user-card">
        <div class="user-profile">
          <img
            src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/aff6dad2cb21d22c1d19784d58db2f16-1592918782697/4b68bdcb-1355-4e65-b15e-510f19b4bc3b.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
    };
  },
  created() {
    this.user = this.$store.getters.logginUser;
  },
};
</script>

<style>
</style>