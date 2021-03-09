<template>
  <div class="productmain">
    <navbar2 />
    <div class="main-cont" >
      <div class="item-cont">
        <div class="flex-container">
          <div v-for="i in info" :key="i.id">
            <div v-bind:id="i.id" style="justify-content: center;align-items: center;overflow: hidden;font-size: 100%;">
              <img v-bind:src="i.imgsrc" style="flex-shrink: 0;max-width: 100%;" width="230" height="230">
              <p style="color: black;background-color: burlywood;">
              {{ i.product_name }}
              {{ i.price }}
              </p>
              </div>
          </div>
        </div>
        <div class="price-for-bill" v-for="check in user.productCollection" :key="check.id">
          <div v-if="check.isSelected">
            {{check.product_name}} {{ (check.price*check.quantity)}}
          </div>
        </div>
        <div>
          Total: {{getTotal}}
        </div>
      </div>
      <div class="open-item" id="demo" style="color: navajowhite; margin-top: 0%; margin-left: -7%;">
        <template>
          <form @submit.prevent="handleSubmit">
              <div class="form-group form-check" v-for="i in user.productCollection" v-bind:key="i.id">
                  <div class="productname-check" style="margin: 1rem">
                    <label class="form-check-label" :for="i.id">{{i.product_name}}</label>
                    <input type="checkbox"  v-model="i.isSelected" :id="i.id" :value="i.id" @change="change(i)">
                  </div>
                  <quantity :id="i.id" v-if="i.isSelected" :item='i' />
              </div>

              <!-- print result -->
              <!-- <div class="form-group">
                      {{user.productCollection}}
              </div> -->

              <div class="form-group">
                  <button class="btn btn-primary" @click='redirect'>Submit</button>
              </div>
          </form>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import quantity from '../components/quantity'
import navbar2 from '../components/navbar2'
import store from '../store/index.js'
export default {
  data () {
    return {
      info: '',
      price: 0,
      user: {
        productCollection: []
      },
      prodlist: []
    }
  },
  name: 'product',
  components: {
    quantity,
    navbar2
  },
  computed: {
    getTotal () {
      let sum = 0
      this.user.productCollection.forEach(e => {
        if (e.isSelected) {
          sum += e.price * e.quantity
        }
      })
      return sum
    }
  },
  methods: {
    handleSubmit () {
      JSON.stringify(this.user)
    },
    getProductDetails () {

    },
    setProduct (id) {
      this.user.productCollection[id] = 0
    },
    change (i) {
      // console.log('inchange')
      // if (i.isSelected) {
      //   this.prodlist.push({
      //     product_id: i.id,
      //     quantity: i.quantity
      //   })
      // }
    },
    redirect () {
      // for (const i in this.user.productCollection) {
      // forEach(i in this.user.productCollection) {
      for (var i = 0; i < this.user.productCollection.length; i++) {
        console.log(i)
        if (this.user.productCollection[i].isSelected) {
          console.log('inSelected')
          this.prodlist.push({
            product_id: this.user.productCollection[i].id,
            quantity: this.user.productCollection[i].quantity
          })
        }
      }
      axios
        .post('http://10.177.68.19:808/service2/customerbillingsystem/' + store.state.username, this.prodlist, { headers: { Authorization: localStorage.getItem('Authorization') } })
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          this.errorMessage = error.message
          console.log(error)
        })
      this.$router.push('/payment/' + store.state.username)
    },
    setProductCollection (info) {
      this.user.productCollection = []
      for (const i in info) {
        this.user.productCollection.push({
          ...info[i],
          isSelected: false,
          quantity: 0
        })
      }
    }
  },
  mounted () {
    axios
      .get('http://10.177.68.19:808/service3/product/getProducts', { headers: { Authorization: localStorage.getItem('Authorization') } })
      .then(response => {
        console.log(response)
        this.info = response.data
        this.setProductCollection(this.info)
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
.productmain {
  background-image: url('https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-1240w.jpg');
  margin: -8px;
  background-size: cover;
  height: 100vh;
  background-repeat: no-repeat;
}
.main-cont {
  display: flex;
  text-align: center;
}

.item-cont {
  width: 100%
}

.open-item {
  width: 30%;
  font-size: 20px;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
}
button {
  background-color: burlywood;
  border-radius: 2px;
  color: black;
  text-align: center;
  display: inline-block;
  font-size: 36px;
  margin: auto;
  font-family: cursive;
}

.flex-container > div {
  width: 150px;
  margin: 29px;
  margin-bottom: -12px;
  line-height: 35px;
  font-size: 13px;
}
body {
  font-family: 'Times New Roman', Times, serif;
  background-color: #433520;
}
/* .inside{
  font-size: 20px;
} */
/* }
.text1{
  top: 50px;
  text-align: center;
  margin: auto;
} */
</style>
