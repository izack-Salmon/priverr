<template>
  <section class="main-layout">
    <form class="from-add-gig" action="">
      <label for="">Title</label
      ><el-input
        class="add-gig-input-tilte"
        maxlength="100"
        placeholder="I will"
        v-model="newGig.title"
      ></el-input>

      <label for="">Price</label
      ><el-input-number
        class="add-gig-input-number"
        v-model="newGig.price"
      ></el-input-number>

      <!-- <el-select v-model="value" placeholder="Select">
    <el-option
      v-for="tag in tags"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select> -->

      <label>Days to make</label>
      <el-input-number
        class="add-gig-input-number"
        v-model="newGig.daysToMake"
      ></el-input-number>
      <el-input
        type="textarea"
        :rows="4"
        placeholder="Description"
        v-model="newGig.description"
      >
      </el-input>

      <div class="img-upload-container">
        <label class="upload-btn" for="uploadImg">
          Choose file
          <!-- <img :src="require('../assets/upload.png')" alt="" /> -->
        </label>
        <input
          class="orgainUpload-btn"
          type="file"
          id="uploadImg"
          @change="onUploadImg"
        />
        <!-- <img v-else :src="require('../assets/loader.gif')" alt="" /> -->
      </div>

      <button class="save-btn" @click="saveGig">Save</button>
    </form>
  </section>
</template>

<script>
import { uploadImg } from "@/services/cloudinary.service";

export default {
  data() {
    return {
      tags: [
        "Voice Over",
        "Logo Design",
        "Wordpress",
        "Video Explainer",
        "Social Media",
        "Illustration",
        "Translation",
        "Date Entry",
        "Book Covers",
      ],
      user: "",
      newGig: {
        title: "",
        price: 0,
        imgUrl: [],
        daysToMake: "",
        description: "",
        owner: {
          fullname: "",
          imgUrl: "",
          rate: "",
          level: 0,
        },
      },
      savedGig: "",
    };
  },
  created() {
    if (this.$route.params.gigId) {
      // this.newGig._id = this.$route.params.gigId;
      // console.log(this.$store.getters.currGig);
      this.newGig = JSON.parse(JSON.stringify(this.$store.getters.currGig));
      // console.log(this.newGig);
    }
    this.user = this.$store.getters.logginUser;
    // console.log(this.user);
    const { fullname, imgUrl, rate, level, _id } = this.user;
    this.newGig.owner = { fullname, imgUrl, _id };
    // console.log(this.newGig);
  },
  methods: {
    async onUploadImg(ev) {
      // console.log("ev", ev);
      // console.log("ev.target.files[0]", ev.target.files[0]);

      // this.isLoading = true
      let res = await uploadImg(ev);
      // console.log(res);
      this.newGig.imgUrl.push(res.url);
      // console.log("this.newGig.imgUrl", this.newGig.imgUrl);
      // this.isLoading = false
    },
    async saveGig() {
      console.log("im h1111");
      this.user = this.$store.getters.logginUser;
      console.log(this.$route.params);
      console.log("this.newGig", this.newGig);

      await this.$store.dispatch({ type: "addGig", gig: this.newGig });
      this.$router.push(`/user/${this.newGig.owner._id}`);
    },
  },
};
</script>

<style>
</style>