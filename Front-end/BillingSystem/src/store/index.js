import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productDetails: '',
    xyz: 0,
    prod: '',
    info: '',
    c: '',
    price: 0,
    user: {
      productCollection: []
    },
    username: '',
    prodlist: [{
      productid: 0,
      quantity: ''
    }],
    billList: '',
    count: 0,
    bid: 0
  },
  getters: {

  },
  mutations: {
  },
  actions: {
  }
})
