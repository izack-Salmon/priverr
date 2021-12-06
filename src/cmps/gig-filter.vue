<template>
<section class="explore flex">   
  <div @click="openBudget" class="btn-budget"> 
    Budget
    <span :class="['arrow-down',{'arrow-up':budgetOpen}]" aria-hidden="true" style="width: 10px; height: 10px;"><svg width="11" height="7" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg"><path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z">
      </path>
      </svg>
      </span>
  </div>

  <div v-if="budgetOpen" :class="['budget-warper',{'show-budget':budgetOpen}]">
    <div class="input-budgets-warp flex">
    <div class="input-wrapper flex">
      <label>Min.</label>
      <input v-model="filterBy.budget.min" type="number" name="gig_price_range" class="min" placeholder="Any" min="0" max="50000" value="">
      <i class="left">$</i>
    </div>
    
    <div class="input-wrapper flex">
      <label>Max.</label>
      <input v-model="filterBy.budget.max" type="number" name="gig_price_range" class="max" placeholder="Any" min="0" max="50000" value="">
      <i class="right">$</i>
    </div>
    </div>
    <div class="btns-budget flex space-between">
      <button @click="clearBugget">Clear All</button>
      <button @click="filter">Apply</button>

    </div>
  </div>

   <el-select class="delivery-input" @change="filter" v-model="filterBy.deliveryTime" placeholder="Delivery Time">
    <el-option value="Express 24H">Express 24H</el-option>
    <el-option value="Up to 3 days">Up to 3 days</el-option>
    <el-option value="Up to 7 days">Up to 7 days</el-option>
    <el-option value="Anytime">Anytime</el-option>
  </el-select> 
  </section>
</template>

<script>
export default {
  data(){
    return {
      budgetOpen: false,
      filterBy:{
        deliveryTime: '',
        budget: { min: 'Any',
                 max: 'Any', 
                 }
     },
    }
  },
  methods: {
    filter(){
      console.log('filterBy', this.filterBy);
      this.budgetOpen = false;
      this.$emit('filter',this.filterBy)
    },
    openBudget(){
      this.budgetOpen = !this.budgetOpen;
    },
    clearBugget(){
      this.filterBy.budget.min = 0;
      this.filterBy.budget.max = 50000;
      console.log('this.filterBy', this.filterBy);
    },
  },
  computed: {

  }
}
</script>
