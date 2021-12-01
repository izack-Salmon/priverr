<template>
    <section class="app-header">
        <div class="logo">
            <div>Piverr<span>.</span></div>
        </div>
        <div class="nav-bar">
            <router-link :to="'/explore'">Explore</router-link>|
            <span>Become a Seller</span>|
            <span>Sign in</span>|
            <div>
                <div class="join-box"> 
                    <span>join</span>
                </div>
                <div hidden class="avatar">
                    avatar
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {

}
</script>

<style>
.app-header{
    color: #fff;
    display: flex;
}
.nav-bar{
    display: flex;
}
.join-box{
    border:solid #fff 1px;
}
</style>