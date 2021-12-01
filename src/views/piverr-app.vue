<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Piverr App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/cmps/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
