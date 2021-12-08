<template>
  <section>
      <header class="graph-header-review">
        <div class="graph-header-details">
          <h2>
            <span class="reviews-count">{{rateCount}}</span>
            <span>Reviews</span>
            
          </h2>
        </div>
      </header>
      <div class="graph-container">
        <div class="star-counter-box">
          <table class="stars-counter">
            <tbody>
              <tr>
                <td> 
                  <span class="num-rate-star">5 Stars</span>
                </td>
                <td class="progress-bar-container">
                  <div class="prog-wrapper">
                    <div class="prog-tubo">
                      <span class="star-prog-shape" :style="{width:setwidth(5) +'%'}" > </span>
                    </div>
                  </div>
                </td>
                <td class="star-count-num">({{starCounter[4]}})</td>
              </tr>
              <tr>
                <td> 
                  <span class="num-rate-star">4 Stars</span>
                </td>
                <td class="progress-bar-container">
                  <div class="prog-wrapper">
                    <div class="prog-tubo">
                      <span class="star-prog-shape" :style="{width:setwidth(4) +'%'}" > </span>
                    </div>
                  </div>
                </td>
                <td class="star-count-num">({{starCounter[3]}})</td>
              </tr>
              <tr>
                <td> 
                  <span class="num-rate-star">3 Stars</span>
                </td>
                <td class="progress-bar-container">
                  <div class="prog-wrapper">
                    <div class="prog-tubo">
                      <span class="star-prog-shape" :style="{width:setwidth(3) +'%'}" > </span>
                    </div>
                  </div>
                </td>
                <td class="star-count-num">({{starCounter[2]}})</td>
              </tr>
              <tr>
                <td> 
                  <span class="num-rate-star">2 Stars</span>
                </td>
                <td class="progress-bar-container">
                  <div class="prog-wrapper">
                    <div class="prog-tubo">
                      <span class="star-prog-shape" :style="{width:setwidth(2) +'%'}" > </span>
                    </div>
                  </div>
                </td>
                <td class="star-count-num">({{starCounter[1]}})</td>
              </tr>
              <tr>
                <td> 
                  <span class="num-rate-star">1 Stars</span>
                </td>
                <td class="progress-bar-container">
                  <div class="prog-wrapper">
                    <div class="prog-tubo">
                      <span class="star-prog-shape" :style="{width:setwidth(1) +'%'}" > </span>
                    </div>
                  </div>
                </td>
                <td class="star-count-num">({{starCounter[0]}})</td>
              </tr>
          
            </tbody>
          </table>
        </div> 
        <!-- <div class="star-col-2">
          <div class="ranking">
            <h6 class="text-display-7">Rating Breakdown</h6>
            <ul>
              <li>Seller communication level
                <span>4.9<span class="review-star rate-10 show-one"></span></span>
              </li>
              <li>Recommend to a friend
                <span>4.8<span class="review-star rate-10 show-one"></span></span>
              </li>
              <li>Service as described<span>4.9<span class="review-star rate-10 show-one"></span></span>
              </li>
            </ul>
          </div>
        </div> -->
      </div>
  </section>
</template>

<script>

import gigStars from './gig-stars.vue'
export default {
    props:{ 
    owner :Object,
  },
  components:{
    gigStars,
  },
  created(){
    this.rateCount = this.owner.reviews.length
    var reviews = this.owner.reviews
    var starCounts = [0,0,0,0,0]
    reviews.forEach((review) => {starCounts[review.rate-1]++ } )
    this.starCounter = starCounts;
  },
  data(){
    return{
      rateCount: 0,
      starCounter:'',
    }
  },
  methods:{
      setwidth(num){
      var starAmount = this.starCounter[num-1]
      var numRate = this.rateCount
      var width = starAmount/numRate*100
      return width
    },
   
  },
  computed:{

  },
  

}
</script>
