export default defineEventHandler(async (e) => {
  const { id } = e.context.params;
  const data = await $fetch(`https://fakestoreapi.com/products/${id}`);
  return data;
});
