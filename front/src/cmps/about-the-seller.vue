<template>
  <section class="about-the-seller">
      <h2 class="about-seller-title">About The Seller</h2>
      <div class="profile-card">
          <div class="profile-info-box flex">
                <div class="about-seller-image">
                    <img :src="gig.owner.imgUrl" alt="">
                </div>
                <div class="about-seller-info">
                    <div class="username-line">
                        <a href="">{{gig.owner.fullname}}</a>
                    </div>
                  
                    <div class="one-liner-rating">
                        <p class="one-liner">Perfection is Everything</p>
                        <div class="rating-flex-box">
                            <gigStars :gig="gig" />
                            <div class="profile-rating-amount">(1k+)</div>
                        </div>
                    </div>
                    <button class="about-seller-btn">Contact Me</button>
                </div>
          </div>
          <div class="seller-stat-desc">
            <ul class="seller-stats">
                <li>
                    From
                    <strong>France</strong>
                </li>
                <li>
                    Member since
                    <strong>Feb 2018</strong>
                </li>
                <li>
                    Avg. response time
                    <strong>about 2 hours</strong>
                </li>
                <li>
                    Last delivery
                    <strong>about 1 hour</strong>
                </li>

            </ul>
            <article>
                Hello,<br><br> My name is Radovan and I’m a graphic designer living in Serbia. You will get quality, original an unique logo designs. My personal journal reflects my journeys through design and I share them here with you. Let start and you will see! Thank you.
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