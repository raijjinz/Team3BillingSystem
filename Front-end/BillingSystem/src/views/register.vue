<template>
  <div class='layout'>
    <navbar />
    <div class='header'>
    </div>
    <div class='page-view' style="background-image: url('https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-1240w.jpg');opacity: 1;">
      <div class='content-page'>
        <div class='form' style="margin-right: 32rem; background-color: burlywood; text-align: center; font-size: 20px; opacity: 80%;">
          <div class='input text'>
            <div class='row'>
            <div class='div-text'>User Name
            </div>
            <input name="name" class='field' type="text" maxlength="50" value="" id="name" v-model="name"  placeholder="Select a UserName">
            </div>
            <div class='row'>
            <div class='div-text'>Phone Number
            </div>
            <input name="number" class='field' type="text" value="" id="number" v-model="number"  placeholder="Only for india">
            </div>
            <div class='row'>
            <div class='div-text'>E-mail Address
            </div>
            <input name="email" class='field' type="text" maxlength="50" value="" id="email" v-model="email" placeholder="---@---.com">
            </div>
            <div class='row'>
            <div class='div-text'>Address
            </div>
            <input name="address" class='field' type="text" maxlength="150" value="" id="address" v-model="address" placeholder="Kaha rahte ho aap">
            </div>
            <div class='row'>
            <div class='div-text'>Password
            </div>
            <input type="text" class='field' minlength="6" value="" id="password" v-model="password" placeholder="6 to 10 characters">
          </div>
          </div>
      </div>
       <button type="button" v-on:click="submitDetails">
        <span class="default-btn"> Create Account</span>
       </button>
    </div>
  </div>
  </div>
</template>
<script>
import axios from 'axios'
import navbar from '../components/navbar'
export default {
  name: 'register',
  components: {
    navbar
  },
  data () {
    return {
      name: '',
      number: '',
      email: '',
      address: '',
      password: ''
    }
  },
  methods: {
    validate: function () {
      if (this.name === '') {
        alert('Name can\'t be Empty')
        return 0
      }
      // if (this.email !== '^(?=.*[d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[w!@#$%^&*]{8,}$/') {
      //   alert('Email is wrong.')
      //   return 0
      // }
      // if (isNaN(this.number)) {
      //   alert('Use only numbers')
      //   return 0
      // }
      if (this.number === '' || this.number.length !== 10) {
        alert('Invalid Phone number, must be 10 digits')
        return 0
      }
      if (this.email === '') {
        alert('Email can\'t be Empty')
        return 0
      }
      if (this.address === '') {
        alert('Address can\'t be Empty')
      }
      if (this.password === '' || (this.password.length < 6 || this.password.length > 10)) {
        alert('Invalid password, must be between 6 and 10 characters')
        return 0
      }
      return 1
    },
    submitDetails: function () {
      const user = {
        username: this.name,
        // address: this.address,
        // phone: this.phone,
        // email: this.email,
        password: this.password
      }
      if (this.validate()) {
        console.log('done')
        axios.post('http://10.177.68.19:808/users/sign-up', user)
          .then(response => {
            console.log(response)
            this.$router.push('/login')
          })
      } else {
        console.log('undone')
      }
    }
  }
}
</script>
<style scoped>
.page-view {
  margin: -8px;
  background-size: cover;
  height: 100vh;
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
  text-align: center;
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
  background-color: burlywood;
  border-radius: 31px;
  color: black;
  text-align: center;
  display: inherit;
  font-size: 18px;
  margin-left: 4rem;
}
form {
  border: 1px black;
}
.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 -16px;
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
  background-color: #4CAF50;
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
  margin: -8px;
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
.topnav {
  width: 100%;
  overflow: hidden;
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
</style>
