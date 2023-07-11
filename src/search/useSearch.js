import { computed, onMounted } from 'vue'
import products from '@/catalog/product-data'


export default function useSearch(searchTerm) {

  const results = computed(() => {
    let searchResults
    if (!searchTerm.value) searchResults = products
    else {
      const lowerTerm = searchTerm.value.toLowerCase()
      searchResults = products.filter(
        (product) => product.name.toLowerCase().includes(lowerTerm),
      )
    }
    return [...searchResults]
  })

  onMounted(() => console.log('Mounted: useSearch'))

  return { searchResults: results }
}
