<template>
  <div class="quantity-toggle" style=" margin-left: 35%;">
      <button @click="decrement()" class='b' id="prodbutton">&mdash;</button>
      <input class="input-1" type="text" :value="item.quantity" readonly>
      <button @click="increment()" class='b' id="prodbutton">&#xff0b;</button>
    </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data () {
    return {
      quantity: 1,
      user: {
        productCollection: []
      }
    }
  },
  methods: {
    increment () {
      this.item.quantity++
    },
    decrement () {
      if (this.item.quantity === 0) {
        alert('Negative quantity not allowed')
      } else {
        this.item.quantity--
      }
    }
  }
}
</script>
<style scoped>
.quantity-toggle{
  display: flex;
  margin: 2%;
}
#prodbutton {
  padding: 3px 9px;
}
.input-1{
  width: 10%;
  text-align: center;
}
</style>
