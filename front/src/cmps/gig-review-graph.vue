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
        <div class="star-col-2">
          <div class="ranking">
            <h6 class="text-display-7">Rating Breakdown</h6>
            <ul>
              <li>Seller communication level
                <span>{{setStats()}}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="16" height="15"> <path fill="#ffb33e" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>

                  <span class="review-star rate-10 show-one"></span></span>
              </li>
              <li>Recommend to a friend
                <span>{{setStats()}}
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="16" height="15"> <path fill="#ffb33e" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                  <span class="review-star rate-10 show-one"></span></span>
              </li>
              <li>Service as described<span>{{setStats()}}
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="16" height="15"> <path fill="#ffb33e" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                <span class="review-star rate-10 show-one"></span></span>
              </li>
            </ul>
          </div>
        </div>
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
    setStats(){
      var stats = 0
      var num 
      this.owner.reviews.forEach((review)=>{
        stats += review.rate    
      });
      num = Math.round(stats/this.rateCount * 10) / 10
      return num
    }
   
  },
  computed:{

  },
  

}
</script>
