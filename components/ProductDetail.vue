<template>
  <div class="card">
    <div class="grid md:grid-cols-2">
      <div class="p-4">
        <img :src="product.image" alt="Product Image" class="md:  mx-auto my-7 md:w-80 sm:max-w-sm md:max-w-md" />
      </div>

      <div class="p-7">
        <h2 class="text-4xl my-7">
          {{ product.title }}
        </h2>

        <div class="text-2xl my-7">Price ${{ product.price }}</div>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Description</h3>
        <p class="mb-7">{{ product.description }}</p>

        <button type="button" class="btn flex hover:bg-purple-500 p-3">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style  scoped>

</style>