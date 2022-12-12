export default defineEventHandler(async (e) => {
  const data = await $fetch("https://fakestoreapi.com/products");
  return data;
});
