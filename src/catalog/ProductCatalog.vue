<template>
  <div>
    <ul class="products">
      <li class="product-item" v-for="(product, index) in products" :key="index">
        <ProductInfo :product="product">
          <button class="cta" @click="addToCart(product)">Buy</button>
        </ProductInfo>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductInfo from './product-info/ProductInfo.vue'
import products from './product-data.js'

const cart = ref([])

function addToCart(product) {
  cart.value.push({ ...product })
}
</script>

<style scoped>
.products {
  margin: 0 100px;
}

.product-item {
  border-bottom: 2px solid #999;
}
</style>