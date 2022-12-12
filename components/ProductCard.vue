<template>
  <div class="card text-center">
    <img :src="product.image" alt="Product Img" class="thumb" />
    <div class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</div>
    <NuxtLink :to="`/products/${product.id}`">
      <div class="btn my-4">View</div>
    </NuxtLink>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>
<style scoped>
.thumb {
  max-height: 120px;
  min-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>