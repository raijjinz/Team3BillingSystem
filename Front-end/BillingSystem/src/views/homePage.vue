<template>
  <div class="homepage">
    <navbar />
  </div>
</template>
<script>
import navbar from '../components/navbar'
export default {
  name: 'homePage',
  components: {
    navbar
  }
}
</script>
<style scoped>
.homepage {
  font-family: 'Times New Roman', Times, serif;
  background-color: sienna;
  background-image: url('https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-1240w.jpg');
  margin: -8px;
  background-size: cover;
  height: 100vh;
  background-repeat: no-repeat;
}
div {
  box-sizing: border-box;
  display: block;
}
.center {
  display: block;
  padding-left: 23em;
  padding-top: 10em;
  width: 50%;
}
</style>
