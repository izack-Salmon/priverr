<template>
  <section class="order-list-container">
    <header class="order-list-head">
      <h2 class="order-list-title">
        <span class="order-list-title-span"
          ><span class="que-order">{{ pendings }}</span> Orders In Queue
        </span>
      </h2>
    </header>
    <div v-if="ordersToShow" class="order-list-box">
      <ul>
        <li class="order-line" v-for="order in ordersToShow" :key="order._id">
          <div class="order-gig-img">
            <img :src="order.gig.imgUrl" alt="" />
          </div>
          <div class="orderer-profile">
            <div class="orderer-pic-box">
              <img :src="order.buyer.imgUrl" alt="" />
            </div>
            <div class="orderer-info">
              <div class="request-by">
                <div class="orderer-user">{{ order.buyer.fullname }}</div>
                <div class="order-timing">
                  {{ setOrderTime(order) }}
                </div>
              </div>
            </div>
          </div>
          <div class="order-price-box">
            <span>Price</span>
            <span class="order-price-num">${{ order.gig.price }}</span>
          </div>
          <div class="order-price-box">
            <span>Date</span>
            <span class="order-price-num">{{ setOrderDate(order) }}</span>
          </div>
          <div class="order-status-box">
            <span>Status</span>
            <span class="" v-if="order.status === 'accepted'">
              <span class="accepted"> ACCEPTED </span>
            </span>
            <span v-if="order.status === 'pending'" class="">
              <span class="status-stamp"> INCOMPLETE </span>
            </span>
            <span v-if="order.status === 'rejected'" class="">
              <span class="rejected"> REJECTED </span>
            </span>
          </div>

          <div v-if="order.status === 'pending'" class="options-wrapper">
            <div>
              <button @click="setAccept(order)" class="accept-btn">
                Accept
              </button>
            </div>
            <span class="slash-betw">/</span>
            <div>
              <button @click="setReject(order)" class="reject-btn">
                Reject
              </button>
            </div>
          </div>
          <div v-else-if="order.status === 'accepted'" class="order-accepted">
            <span> Accepted!</span>
          </div>
          <div v-else-if="order.status === 'rejected'" class="order-rejected">
            Rejected!
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: ["orders"],
  data() {
    return {
      ordersToShow: "",
      pendings: 0,
      user: "",
    };
  },
  created() {
    //  this.ordersToShow = this.$store.getters.ordersSeller;
    this.getLogInUser();
    this.showUserOrders();
  },
  methods: {
    setOrderTime(order) {
      const dateObj = new Date(order.createdAt).toLocaleString().split(",")[1];
      return dateObj;
    },
    setOrderDate(order) {
      const dateObj = new Date(order.createdAt).toLocaleString().split(",")[0];
      return dateObj;
    },
    getLogInUser() {
      this.user = this.$store.getters.logginUser;
    },
    showUserOrders() {
      // var OrderArr = this.orders.filter((order) => {
      //     return order.seller._id === this.user._id
      // });
      this.ordersToShow = this.orders.reverse();
      // console.log(this.ordersToShow);
      this.queNum();
    },
    queNum() {
      var count = 0;
      this.ordersToShow.forEach((order) => {
        if (order.status === "pending") {
          count++;
        }
      });
      this.pendings = count;
    },
    setAccept(order) {
      // console.log('setAcc',order);
      order.status = "accepted";
      // console.log('setAcc',order.status);
      return order.status;
    },
    setReject(order) {
      order.status = "rejected";
      return order.status;
    },
  },
  computed: {},
};
</script>

