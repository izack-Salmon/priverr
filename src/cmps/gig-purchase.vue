<template>
  <section>
    <div v-if="gig" class="purchase-details">
      <div class="pack-and-price flex">
        <span class="pack">Package details</span>
        <span class="price"> ${{ gig.price }}</span>
      </div>
      <div>
        <span>upto 5 logo designs</span>
      </div>
      <!-- need to add offer to json? -->
    <div class="additional-info">

      <div class="seller-service"> 
        ⏱️<span>7 Days Delivery</span>
        ♻️<span>Unlimited Revisions</span>
      </div>

    </div>
    <button class="purch-btn" @click="purchaseMsg">Continue (${{gig.price}})</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "gigPurchase",
  props: {
    gig: Object,
  },
  methods: {
    purchaseMsg(){
      console.log('hi');
      this.$emit('purchaseMsg');
    },
  },
};
</script>

<style>
 
</style>

