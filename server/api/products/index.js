export default defineEventHandler((e) => {
  const data = $fetch("https://fakestoreapi.com/products");
  return;
});
