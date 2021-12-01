<template>
  <section>
    <div v-if="gig" class="purchase-details">
      <h4>Package details</h4>
      <span> ${{ gig.price }}</span>
      <p>upto 5 logo designs</p>
      <!-- need to add offer to json? -->
    <div class="additional-info">
      <div><p>7 Days Delivery</p></div>
      <div><p>Unlimited Revisions</p></div>
    </div>
    <button @click="purchaseMsg">Continue (${{gig.price}})</button>
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
      this.$emit('q');
    },
  },
};
</script>

