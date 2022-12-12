<template>
  <div>
    <header class="shadow-sm bg-blue">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/">Dojo Mersh</NuxtLink>

        <ol class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
          <li><NuxtLink to="/about-us">About</NuxtLink></li>
        </ol>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<style>
  .router-link-exact-active {
    color: #7145e7;
  }
</style>