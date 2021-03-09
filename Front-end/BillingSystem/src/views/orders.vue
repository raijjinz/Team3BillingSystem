<template>
  <div class="orderpage">
  <navbar2 />
    <div class="card" style="margin-left: 450px;
    background-color: beige;
    opacity: 82%;
    font-style: italic;
    font-weight: bolder;">
            <div v-for="bill in billList" v-bind:key="bill.bill_id">
                <div class='container'>
                  <p style="color: black">
                  Bill No {{ xyz++ }}
                    <button @click="invoice(bill.bill_id)" style="margin-left: 224px;
    display: block;"> View More </button>
                  </p>
                  <hr>
                </div>
            </div>
          </div>
      </div>
</template>

<script>
import axios from 'axios'
import store from '../store/index.js'
import navbar2 from '../components/navbar2'
export default {
  name: 'orders',
  components: {
    navbar2
  },
  data () {
    return {
      billList: '',
      xyz: 1
    }
  },
  methods: {
    redirect: function () {
      this.$router.push('http://10.177.68.19:8082/customerbillingsystem/' + store.state.username + '/orders/' + this.billList.bill_id)
    },
    invoice (id) {
      localStorage.setItem('billid', id)
      this.$router.push('/invoicedetails')
    }
  },
  mounted () {
    axios
      .get('http://10.177.68.19:808/service2/customerbillingsystem/' + store.state.username, { headers: { Authorization: localStorage.getItem('Authorization') } })
      .then(response => {
        console.log(response)
        this.billList = response.data
      })
      .catch(error => {
        this.errorMessage = error.message
        console.log(error)
      })
  }
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
.orderpage {
  background-image: url('https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-1240w.jpg');
  margin: -8px;
  background-size: cover;
  height: 100vh;
  background-repeat: no-repeat;
}
</style>
