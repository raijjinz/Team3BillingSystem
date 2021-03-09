<template>
<div class="topnav">
  <router-link to="/login"><span >Login</span></router-link>
  <router-link to="/register"> <span >Register</span> </router-link>
  <router-link to="/"> <span >Home</span> </router-link>
</div>
</template>
<script>
export default {
  name: 'navbar'
}
</script>
<style scoped>
body {
  margin: -8px;
  margin-right: -20px
}
.topnav {
  width: 100vw;
  top: 0px;
  margin: -8px;
  margin-right: -20px;
  overflow: auto;
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
