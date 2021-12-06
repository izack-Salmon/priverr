<template>
  <section
    v-show="!logedInUser"
    @click="exitLogin($event)"
    class="backgrond-pop"
  >
    <div class="login-pop">
      <div class="sing-in-box">
        <div class="sing-in-contant">
          <h4 class="form-header">Join Piverr</h4>
          <form class="login-form" @submit.prevent="login">
            <el-input
              placeholder="Enter username"
              v-model="user.username"
            ></el-input>
            <!-- <el-input placeholder="Enter fullname"></el-input> -->
            <el-input
              placeholder="Please input password"
              v-model="user.password"
            ></el-input>
            <button class="btn-login">continue</button>
            <hr />
          </form>
          <div class="signing-footer">
            Already a member? <button class="form-sgin-in">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "login",
  props: { showLogin: Boolean },
  data() {
    return {
      user: {
        username: "",
        password: "",
        isAdmin: false,
      },
      loginOpened: "",
    };
  },
  //   created() {
  //     // this.loginOpened = this.showLogin;
  //   },
  methods: {
    toggle() {
      this.loginOpened = true;
    },
    login() {
      console.log("hi");
      this.$store.dispatch({ type: "login", user: this.user });
    },
    hide() {
      //   console.log("hi");
      this.$emit("hide");
      //   this.loginOpened = false;
    },
    exitLogin(ev) {
      //   console.log("hi");
      if (ev.srcElement.localName === "section") {
        // console.log("im here to");
        this.$emit("close");
      }
    },
  },
  computed: {
    showlogin() {
      return this.showLogin;
    },
    logedInUser() {
      console.log(this.$store.getters.logginUser);
      return this.$store.getters.logginUser;
    },
  },
  watch: {
    showLogin: {
      handler() {
        // console.log(this.showLogin);
        this.loginOpened = this.showLogin;
        console.log(this.loginOpened);
      },
      immediate: true,
    },
  },
};
</script>

<style>
</style>