<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products" :key="product.id">
        <NuxtLink :to="`/products/${product.id}`">
          <ProductCard :product="product" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  // Fetch Products
  const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>