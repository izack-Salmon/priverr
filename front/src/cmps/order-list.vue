<template>
    <section class="order-list-container" >
        <header class="order-list-head">
            <h2 class="order-list-title"> <span class="que-order">{{pendings}}</span> In Que </h2>
        </header> 
        <div class="order-list-box">
            <ul>
                <li class="order-line" v-for="order in orders" :key="order._id">
                    <!-- <div>
                        <button type="button" class="close-btn" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="orderer-profile">
                        <div class="orderer-pic-box">
                            <img :src="order.buyer.imgUrl" alt="">
                        </div>
                        <div class="orderer-info">
                            <div class="request-by">
                                
                                <div class="orderer-user">{{order.buyer.fullname}}</div>    
                            </div>
                                <div class="order-status order-panding">
                                {{order.status}}
                                 </div>
                            <div class="order-timing">
                            1 hour ago
                            </div>
                        </div>
                    </div>

                    <div v-if="order.status ==='pending'" class="options-wrapper"> 
                        <div>
                            <button @click="setAccept(order._id)" class="accept-btn">Accept</button>   
                        </div>
                        <span class="slash-betw">/</span>
                        <div>
                            <button  @click="setReject(order._id)" class="reject-btn">Reject</button>   
                        </div>
                    </div>
                    <div v-else-if="order.status ==='accepted'" class="order-accepted">
                        Accepted!
                    </div>
                    <div v-else-if="order.status === 'rejected'" class="order-rejected">
                        Rejected!
                    </div> -->
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    props:['orders'],
    data(){
        return{
            userOrders:[],
            pendings:0,
        }
    },
    created(){
        console.log('orders: ',this.orders)
        this.queNum()
    },
    methods:{
        showUserOrders(){
        //    var userOrders =[]
        //    const userId = orders.
        //    this.orders.forEach(order => {
        //        if(user)
        //    });
        },
        queNum(){
        var count = 0
        this.orders.forEach(order => { 
            if(order.status === 'pending'){ count++ }
        });
        this.pendings = count;
        },
        setAccept(id){
            this.$store.dispatch('setOrderStatus',{})
        },
    },
    computed:{

    }
}
</script>

