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
            <p class="login-msg">{{ msg }}</p>
            <el-input
              v-if="sginIn"
              placeholder="Enter fullname"
              v-model="user.fullname"
            ></el-input>
            <el-input
              placeholder="Enter username"
              v-model="user.username"
            ></el-input>
            <!-- <el-input placeholder="Enter fullname"></el-input> -->
            <el-input
              placeholder="Please input password"
              v-model="user.password"
            ></el-input>
            <button @click="login" v-if="!sginIn" class="btn-login">
              continue
            </button>
            <button @click="sginIn" v-if="sginIn" class="btn-login">
              continue
            </button>
            <hr />
          </form>
          <div class="signing-footer">
            <span v-if="!sginIn">Already a member?</span>
            <span v-if="sginIn">Not a member yet?</span>
            <button v-if="!sginIn" @click="getSginIn" class="form-sgin-in">
              Sign In
            </button>
            <button v-if="sginIn" @click="getSginIn" class="form-sgin-in">
              Join now
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "login",
  props: { showLogin: Boolean, enterLogin: Boolean },
  data() {
    return {
      user: {
        username: "",
        password: "",
        fullname: "",
      },
      loginOpened: "",
      msg: "",
      sginIn: false,
      logeddInUser: "",
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
      if (!this.user.username || !this.user.password) {
        this.errorMsg("Please enter username/password");
        return;
      }
      var user = this.$store.dispatch({ type: "login", user: this.user });
      Promise.resolve(user).then((user) => {
        // console.log(user);
      });
      // console.log(user);
    },
    getSginIn() {
      this.sginIn = !this.sginIn;
    },
    sginUp() {
      if (!this.user.fullname || !this.user.password || !this.user.username) {
        this.errorMsg("Please enter username/password");
        return;
      }
      this.$store.dispatch({ type: "signup", user: this.user });
    },
    hide() {
      this.$emit("hide");
      //   this.loginOpened = false;
    },
    exitLogin(ev) {
      if (ev.srcElement.localName === "section") {
        // console.log("im here to");
        this.$emit("close");
      }
    },
    errorMsg(msg) {
      this.msg = msg;
      setTimeout(() => {
        this.msg = "";
      }, 5000);
    },
  },
  computed: {
    showlogin() {
      return this.showLogin;
    },
    logedInUser() {
      // console.log(this.$store.getters.logginUser);
      return this.$store.getters.logginUser;
    },
  },
  watch: {
    showLogin: {
      handler() {
        // console.log(this.showLogin);
        this.loginOpened = this.showLogin;
        // console.log(this.loginOpened);
      },
      immediate: true,
    },
  },
};
</script>

<style>
</style>