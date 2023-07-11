<template>
  <div class="container">
    <div class="left">
      <img class="logo" src="./logo.png" alt="Logo" />
      <router-link to="/catalog" routerLinkActive="active">Catalog</router-link>
      <router-link to="/cart" routerLinkActive="active">Cart</router-link>
      <router-link to="/search" routerLinkActive="active">Search</router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  margin-bottom: 10px;
  margin: -3px -8px 0 -8px;
  padding: 0 8px 5px 8px;
  border-bottom: 2px solid #818285;
}

.left {
  display: flex;
  align-items: center;
}

.left * {
  margin-right: 25px;
}

.logo {
  height: 65px;
}
</style>