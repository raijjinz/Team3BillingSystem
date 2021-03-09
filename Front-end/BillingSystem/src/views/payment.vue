<template>
  <div class="paymentmain">
    <navbar2 />
    <div class="row">
      <h2 class='header' style="margin-left: 39rem;color: white;font-size: 34px;">Payment Page</h2>
    <div class="col-75" style="opacity:0.867">
    <div class="container" id='abc'>
      <form action="/action_page.php">
        <div class="row">
          <div class="col-50">
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="abc@example.com">
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="HSR LAYOUT">
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="BENGALURU">
            <div class="row">
              <div class="col-50">
                <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="KARNATAKA">
              </div>
              <div class="col-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="560021">
              </div>
            </div>
          </div>
          <div class="col-50">
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="ADARSH KUMAR">
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444">
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="October">
            <div class="row">
              <div class="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2022">
              </div>
              <div class="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="786">
              </div>
            </div>
          </div>
        </div>
        <label>
          <input type="checkbox" checked="checked" name="sameadr"> Shipping address same as billing
        </label>
        <input type="button" value="Continue to checkout" class="btn" v-on:click='paymentSuccess'>
        <button type="button" @click="cancelproduct" style="background-color: darkred; margin-left: 180px; padding: 11px 33px">Cancel</button>
      </form>
    </div>
  </div>
  <div class="col-25">
    <div class="container">
      <p>Total <span class="price" style="color:black;margin: -5px;"><b>You Knew it</b></span></p>
    </div>
  </div>
</div>
  </div>
</template>
<script>
import navbar2 from '../components/navbar2'
import axios from 'axios'
export default {
  name: 'payment',
  components: {
    navbar2
  },
  methods: {
    cancelproduct () {
      this.$router.push({ path: '/product/adarsh' })
    },
    paymentSuccess: function () {
      alert('Payment Successfull')
      axios
        .post('http://10.177.68.19:808/login', { headers: { Authorization: localStorage.getItem('Authorization') } })
        .then(response => {
          console.log(response)
          this.$router.push({ path: '/product/adarsh' })
        })
        .catch(error => {
          this.errorMessage = error.message
          console.log(error)
        })
    }
  },
  created () {
    axios
      .get('http://10.177.68.19:808/service3/product/getProducts', { headers: { Authorization: localStorage.getItem('Authorization') } })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        this.errorMessage = error.message
        console.log(error)
        alert('Not allowed, please login first')
        this.$router.push({ path: '/login' })
      })
  }
}
</script>
<style scoped>
.paymentmain {
  background-image: url('https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-1240w.jpg');
  margin: -8px;
  background-size: cover;
  height: 140vh;
  background-repeat: no-repeat;
}
.input div span {
    font-weight: 700;
    color: red;
    padding: 20px;
    border:1px black;
    align-content: space-between;
}
div {
  flex: auto;
  box-sizing: border-box;
  display: block;
}
#password {
  -webkit-text-security:disc
}
* {
  margin: 0;
  padding: 0;
}
.field {
  width: 18rem;
}
.input {
  border-radius: 5px;
  padding: 20px;
}
  .div-text {
      width: -webkit-fill-available;
      padding-bottom: 10px;
      float: right;
  }
.content-page {
  padding: 3.5rem;
  margin-left: 30rem;
}
button {
  background-color: darkgreen;
  border-radius: 2px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 18px;
  margin: auto;
}
form {
  border: 1px black;
}.input div span {
    font-weight: 700;
    color: red;
    padding: 20px;
    border:1px black;
    align-content: space-between;
}
div {
  flex: auto;
  box-sizing: border-box;
  display: block;
}
#password {
  -webkit-text-security:disc
}
* {
  margin: 0;
  padding: 14px;
}
.field {
  width: 18rem;
}
.input {
  border-radius: 5px;
  padding: 20px;
}
  .div-text {
      width: -webkit-fill-available;
      padding-bottom: 10px;
      float: right;
  }
.content-page {
  padding: 3.5rem;
  margin-left: 30rem;
}
button {
  background-color: darkgreen;
  border-radius: 2px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 18px;
  margin: auto;
}
form {
  border: 1px black;
}
.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: -9px -14px;
}
.header {
      margin-left: 29rem;
}
.col-25 {
  -ms-flex: 25%;
  flex: 25%;
}
.col-50 {
  -ms-flex: 50%;
  flex: 50%;
}
.col-75 {
  -ms-flex: 75%;
  flex: 75%;
}
.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}
#abc {
  margin-left: 28rem;
    padding-left: 20px
}
.container{
  background-color: #f2f2f2;
  border: 1px solid lightgrey;
  border-radius: 3px;
  padding: 5px 15px 10px 5px
}
input[type=text] {
  /* width: 100%; */
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
label {
  margin-bottom: 10px;
  display: block;
}
.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
}
.btn {
  background-color: saddlebrown;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
}
.btn:hover {
  background-color: #45a049;
}
span.price {
  float: right;
  color: grey;
}
@media (max-width: 800px) {
  .row {
    flex-direction: column-reverse;
  }
  .col-25 {
    margin-bottom: 20px;
  }
}
body {
  font-family: 'Times New Roman', Times, serif;
  background-color: #433520;
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
topnav {
  width: 100%;
  overflow: hidden;
  background-color: #333;
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
  background-color: #ddd;
}
.topnav span.active {
  background-color: #4CAF50;
  color: white;
}
*{
  margin: 0;
}
</style>
