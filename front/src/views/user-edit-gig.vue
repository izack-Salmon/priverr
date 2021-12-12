<template>
  <section class="main-layout">
  
    <!-- <h2>Edit Gig</h2> -->
    <form class="form-add-gig" action="">
    <div class="flex space-between">
      <div>
      <label for="">Gig Title
        <el-input
        class="add-gig-input-tilte"
        maxlength="100"
        placeholder="I will do something i'm realy good at"
        v-model="newGig.title">
        </el-input>
    </label>

      <p> Category </p>
        <el-select v-model="tag" clearable placeholder="Select Category">
          <el-option
            v-for="label in labels"
            :key="label"
            :label="label"
            :value="label">
          </el-option>
        </el-select>
    
   <div class="inputs-num flex space-between">
      <label for=""> Price
        <el-input-number
        class="add-gig-input-number"
        v-model="newGig.price"
      ></el-input-number>
    </label>

      <label>Days to make
      <el-input-number
        class="add-gig-input-number"
        v-model="newGig.daysToMake">
        </el-input-number>
      </label>
    </div>
</div>

   <div class="img-upload-container flex align-center">
      <p>  </p>
        <label class="upload-btn" for="uploadImg">
          <!-- v-if="!isLoading" -->
          <!-- Choose file -->
          <img class="upload-img" :src="require('../assets/imgs/add-img.png')" alt="" />
        </label>
        
        <!-- <div v-else class="upload-img"> <i class="el-icon-loading"> </i></div> -->
      
        <input
          class="orgainUpload-btn"
          type="file"
          id="uploadImg"
          @change="onUploadImg" />
        <!-- <img v-else :src="require('../assets/loader.gif')" alt="" /> -->
      </div>
  </div>
      <label for=""> Description
      <el-input
        type="textarea"
        :rows="4"
        placeholder="Description"
        v-model="newGig.description">
      </el-input>
    </label>

   
      <div class="flex space-between" >
      <button class="cancel-btn" @click="cancelEdit"> Cancel </button>
      <button class="save-btn" @click="saveGig"> Save </button>
      </div>
    </form>
  </section>
</template>

<script>
import { uploadImg } from "@/services/cloudinary.service";

export default {
  data() {
    return {
      labels: [
        "VOICE OVER",
        "LOGO DESIGN",
        "WORDPRESS",
        "VIDEO EXPLAINER",
        "SOCIAL MEDIA",
        "ILLUSTRATION",
        "TRANSLATION",
        "DATE ENTRY",
        "BOOK COVERS",
      ],
      tag: "",
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
          level: "",
        },
      },
      savedGig: "",
      isLoading: false,
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

      this.isLoading = true
      let res = await uploadImg(ev);
      // console.log(res);
      // const scale= 'c_scale,h_393,w_680'
      // let strImgStart = res.url.substring(0, 47)
      // let strImgEnd = res.url.substring(46, str.length)
      // var strImgWithScale = `${strImgStart}${scale}${strImgEnd}`
      // this.newGig.imgUrl.push(strImgWithScale);
      this.newGig.imgUrl.push(res.url);
      // console.log("this.newGig.imgUrl", this.newGig.imgUrl);
      this.isLoading = false
    },
    async saveGig() {
      this.user = this.$store.getters.logginUser;
      // console.log(this.$route.params);
      // console.log("this.newGig", this.newGig);
      this.newGig.tags = [this.tag];
      await this.$store.dispatch({ type: "addGig", gig: this.newGig });
      this.$router.push(`/user/${this.newGig.owner._id}`);
    },

    cancelEdit(){
           this.$router.push(`/user/${this.newGig.owner._id}`);
    }
  },
};
</script>

<style>
</style>