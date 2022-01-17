<template>
  <section @click="exitLogin($event)" class="backgrond-pop">
    <div class="login-pop">
      <div class="sing-in-box">
        <div class="sing-in-contant">
          <h4 v-if="sginIn" class="form-header">Login</h4>
          <h4 v-else class="form-header">Join Piverr</h4>
          <form class="login-form" @submit.prevent="">
            <p class="login-msg">{{ msg }}</p>
            <el-input
              v-if="!sginIn"
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
            <button v-if="sginIn" @click="login" class="btn-login">
              Continue
            </button>
            <button v-else @click="sginUp" class="btn-login">Continue</button>
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
import { socketService } from "../services/socket.service";
export default {
  name: "login",
  props: { showLogin: Boolean, enterjoin: Boolean },
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
      isOpen: false,
      logeddInUser: "",
    };
  },
  created() {
    // this.loginOpened = this.showLogin;
    this.sginIn = !this.enterjoin;
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
      // this.loginOpened = true;
    },
    async login() {
      console.log(this.user.username, this.user.password);
      if (!this.user.username || !this.user.password) {
        this.errorMsg("Please enter username/password");
        return;
      }
      var user = await this.$store.dispatch({ type: "login", user: this.user });
      if (typeof user === "string") {
        this.errorMsg(user);
        return;
      }
      if (user) {
        socketService.on(user._id, (data) => {
          console.log("im conccted");
        });
        this.isOpen = false;
        this.$emit("close");
      }
    },
    getSginIn() {
      this.sginIn = !this.sginIn;
    },
    async sginUp() {
      if (!this.user.fullname || !this.user.password || !this.user.username) {
        this.errorMsg("Please enter username/password");
        return;
      }
      var user = await this.$store.dispatch({
        type: "signup",
        user: this.user,
      });
      console.log(user);

      if (user) {
        socketService.on(user._id, (data) => {
          console.log("im conccted");
        });
        this.isOpen = false;
        this.$emit("close");
      }
    },
    hide() {
      this.$emit("hide");
      //   this.loginOpened = false;
    },
    exitLogin(ev) {
      if (ev.srcElement.localName === "section") {
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
    async logedInUser() {
      await console.log(this.$store.getters.logginUser);
      return await this.$store.getters.logginUser;
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