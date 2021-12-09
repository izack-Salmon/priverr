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
       <label class="clickable" >
           <!-- <img :src="require('../assets/upload.png')" alt="" /> -->
       <input type="file" id="uploadImg" @change="onUploadImg"  />
       </label>
       <!-- <img v-else :src="require('../assets/loader.gif')" alt="" /> -->
   </div>

      <button @click="saveGig"> Save </button>
    </form>
  </section>
</template>

<script>
import { uploadImg } from '@/services/cloudinary.service'

export default {
  data() {
    return {
      tags:['Voice Over', 'Logo Design', 'Wordpress', 'Video Explainer', 'Social Media', 'Illustration', 'Translation' ,'Date Entry', 'Book Covers'],
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
    };
  },
  created() {
    this.user = this.$store.getters.logginUser;
    console.log(this.user);
    const { fullname, imgUrl, rate, level, _id } = this.user;
    this.newGig.owner = { fullname, imgUrl, rate, level, _id  };
    console.log(this.newGig);
  },
  methods: {
   async onUploadImg(ev) {
     console.log('ev', ev);
     console.log('ev.target.files[0]', ev.target.files[0]);
 
// this.isLoading = true
        let res = await uploadImg(ev);
        // console.log(res);
        this.newGig.imgUrl.push(res.url)
        console.log('this.newGig.imgUrl', this.newGig.imgUrl);
        // this.isLoading = false
    },
   saveGig(){
      this.user = this.$store.getters.logginUser;
      if (this.$route.params.id) {
        this.newGig._id = this.$route.params.id
        }
      console.log('this.newGig', this.newGig);
     this.$store.dispatch({ type: "addGig", gig: this.newGig });
    //  this.$router.push(`/user/${this.newGig.owner._id}`)
    }
  }
};
</script>

<style>
</style>