<template>
<div class="topnav">
  <a href="/" @click="logout" style="float:right;margin: 15px;">Logout</a>
  <button @click="orderdetails" style="float: right;
    margin: 15px;
    border: 0;
    background-color: rgb(201, 128, 65);
    color: darkblue;
    margin-top: 17px;
    font-size: 14px;">Order Details</button>
  <router-link to="/"><span >Home</span></router-link>
</div>
</template>
<script>
import store from '../store/index.js'
export default {
  name: 'navbar2',
  methods: {
    logout () {
      localStorage.removeItem('Authorization')
      this.$router.push('/')
    },
    orderdetails () {
      this.$router.push('/orders/' + store.state.username)
    }
  }
}
</script>
<style scoped>
.topnav {
  width: 100%;
  overflow: hidden;
  background-color: rgb(201, 128, 65);
}
.topnav span {
  float: right;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  cursor: pointer;
}
.topnav span:hover {
  background-color: #85603f;
  color: white;
}
.topnav span.active {
  background-color: #fde8cd;
}
</style>
