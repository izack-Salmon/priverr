<template>
  <section class="about-the-seller">
      <h2 class="about-seller-title">About The Seller</h2>
      <div class="profile-card">
          <div class="profile-info-box flex">
                <div class="about-seller-image">
                    <img :src="gig.owner.imgUrl" alt="">
                </div>
                <div class="about-seller-info">
                    <a href="">{{gig.owner.fullname}}</a>
                    <div class="one-liner-rating">
                        <p class="one-liner">Logo Designer</p>
                        <div class="orca-rating">
                            <gigStars :gig="gig" />|<span>(1k+)</span>|
                            
                        </div>
                    </div>
                    <button class="about-seller-btn">Contact Me</button>
                </div>
          </div>
          <div class="seller-stat-desc">
            <ul class="seller-stats">
                <li>
                    From
                    <strong>Serbia</strong>
                </li>
                <li>
                    Member since
                    <strong>1 hour</strong>
                </li>
                <li>
                    Avg. response time
                    <strong>Feb 2018</strong>
                </li>
                <li>
                    Last delivery
                    <strong>about 5 hours</strong>
                </li>

            </ul>
            <article>
                Hello,<br><br>My name is Radovan and I’m a graphic designer living in Serbia. You will get quality, original an unique logo designs. My personal journal reflects my journeys through design and I share them here with you. Let start and you will see! Thank you.
            </article>
          </div>
      </div>
  </section>
</template>

<script>
import gigStars from "../cmps/gig-stars.vue";
export default {
components:{
    gigStars 
},
 props: {
    gig: Object,
  },
  
}
</script>

<style>

</style>