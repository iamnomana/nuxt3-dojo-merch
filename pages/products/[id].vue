<template>
  <div>

    <Head>
      <Title>{{ product.title }}</Title>
    </Head>
    <ProductDetail :product="product" />
  </div>
</template>

<script setup>

// Get Product ID
const { id } = useRoute().params;

// Fetch Data
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