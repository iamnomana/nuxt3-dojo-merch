<template>
  <div>
    <ProductDetail :product="product" />
  </div>
</template>

<script setup>
  const { id } = useRoute().params;

  const { data: product } = await useFetch(
    `https://fakestoreapi.com/products/${id}`,
    { key: id }
  );

  // Throw Error
  if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: "Product not Found" });
  }
</script>

<style>
</style>