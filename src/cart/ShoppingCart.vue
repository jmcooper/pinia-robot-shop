<template>
  <div class="container">
    <h1>Your Cart</h1>
    <div class="empty-cart" v-if="cart.length === 0">
      You have no items in your cart
    </div>
    <ul class="cart" v-if="cart.length > 0">
      <li class="cart-item" v-for="(product, index) in cart" :key="index">
        <ProductInfo :product="product">
          <button @click="removeFromCart(product)">Remove</button>
        </ProductInfo>
      </li>
    </ul>
    <div v-if="cart.length > 0" class="total">Total: {{ toCurrency(cartTotal) }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { toCurrency } from '@/shared/formatters'
import ProductInfo from '@/catalog/product-info/ProductInfo.vue'
import products from '@/catalog/product-data.js'

const cart = ref([{ ...products[10] }, { ...products[3] }])
const cartTotal = ref(0)

function removeFromCart(product) {
  cart.value = cart.value.filter((p) => p !== product)
}

</script>

<style scoped>
.cart {
  margin: 0 100px;
  border-top: 2px solid #999;
}

.cart-item {
  border-bottom: 2px solid #999;
}

.total {
  margin: 25px 175px 0 0;
  align-self: right;
  font-size: 25px;
  text-align: right;
}

.empty-cart {
  margin-top: 20px;
  font-size: 20px;
}
</style>