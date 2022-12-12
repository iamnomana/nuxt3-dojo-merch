<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" alt="Product Image" class="mx-auto my-7" />
      </div>

      <div class="p-7">
        <h2 class="text-4xl my-7">
          {{ product.title }}
        </h2>

        <div class="text-2xl my-7">Price ${{ product.price }}</div>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Description</h3>
        <p class="mb-7">{{ product.description }}</p>

        <button class="btn flex">
          <i class="material-icons mr-2"></i>
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style  scoped>
img {
  max-width: 500px;
}
</style>