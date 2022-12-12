<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Products",
});
// Fetch Products
const { data: products } = await useFetch("/api/products");
</script>