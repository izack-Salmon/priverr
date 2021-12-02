<template>
  <section class="app-header">
    <div class="main-header flex align-center space-between">
      <div class="logo">
        <router-link :to="'/'">Piverr<span>.</span></router-link>
        <!-- <router-link :to="'/'">
          <img src="https://res.cloudinary.com/pivarr/image/upload/v1638461660/logopiver/Piverr_Logo_lzsrld.png"/>
        </router-link> -->
      </div>
      <div class="nav-bar">
        <router-link :to="'/explore'">Explore</router-link>
        <span>Become a Seller</span> <span>Sign in</span>
        <!-- <div> -->
        <!-- <div class="join-box"> -->
        <button>Join</button>
        <!-- </div> -->
        <div hidden class="avatar">avatar</div>
        <!-- </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

