<template>
  <div>
    <header class="shadow-sm bg-blue">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">DIV Mersh</NuxtLink>

        <ol class="flex gap-4">
          <li>
            <NuxtLink to="/" exact-active-class="text-[#7145e7] font-semibold">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" exact-active-class="text-[#7145e7] font-semibold">Products</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about-us" exact-active-class="text-[#7145e7] font-semibold">About</NuxtLink>
          </li>
        </ol>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>
