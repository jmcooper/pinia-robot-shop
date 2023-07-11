<template>
  <div class="container">
    <div>
      <input placeholder="Enter Search Term" @input="searchTerm = $event.target.value" />
    </div>
    <div class="filters">
      <div class="filters-text">Filters:</div>
      <div><button @click="filter('Heads')" :class="getClass('Heads')">Heads</button></div>
      <div><button @click="filter('Arms')" :class="getClass('Arms')">Arms</button></div>
      <div><button @click="filter('Torsos')" :class="getClass('Torsos')">Torsos</button></div>
      <div><button @click="filter('Bases')" :class="getClass('Bases')">Bases</button></div>
      <div><button @click="clearFilters()">Clear Filters</button></div>
    </div>
    <div>
      <ul class="products">
        <li class="product-item" v-for="(product, index) in pagedResults" :key="index">
          <ProductInfo :product="product">
            <button class="cta" @click="addToCart(product)">Buy</button>
          </ProductInfo>
        </li>
      </ul>
    </div>
    <div>
      <button @click="prevPage()" class="button-link">Previous Page</button>
      Showing {{ currentStartIndex }} to {{ currentEndIndex }} of {{ resultCount }} results
      <button @click="nextPage()" class="button-link">Next Page</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProductInfo from '@/catalog/product-info/ProductInfo.vue'

import useSearch from './useSearch'
import useFilters from './useFilters'
import usePagination from './usePagination'

const searchTerm = ref('')
const { searchResults } = useSearch(searchTerm)

const {
  filters,
  applyFilters,
  clearFilters,
  filteredResults,
} = useFilters(searchResults)

const {
  nextPage,
  prevPage,
  currentStartIndex,
  currentEndIndex,
  pagedResults,
} = usePagination(filteredResults)

function filter(category) {
  const filtersObj = { category }
  applyFilters(filtersObj)
}

function getClass(category) {
  return filters.value.some(f => f['category'] === category)
    ? 'cta'
    : ''
}

const resultCount = computed(() => filteredResults.value.length)
</script>

<style scoped>
.container {
  margin: 20px 100px;
}

input {
  font-size: 22px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}

img {
  width: 100px;
  margin-right: 20px;
}

.products {
  border-top: 2px solid #999;
}

.product-item {
  border-bottom: 2px solid #999;
}

.button-link {
  background: none !important;
  border: none;
  padding: 0 !important;
  text-decoration: underline;
  cursor: pointer;
  color: #1e87ba;
}

button {
  width: 150px;
}

.filters {
  margin-top: 10px;
  display: flex;
  font-size: 18px;
  align-items: center;
}

.filters-text {
  font-size: 25px;
  color: #777;
}

.filters button {
  font-size: 18px;
}

.filters>* {
  margin-right: 10px;
}
</style>
