<template>
  <div class="flex flex-col">
    <NuxtLink
      class="p-3"
      v-for="(link, index) in navLinks"
      :key="index"
      :to="link.url"
      >{{ link.label }}</NuxtLink
    >
  </div>
</template>

<script setup>
const navLinks = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Projects",
    url: "/projects",
  },
  {
    label: "About",
    url: "/about",
  },
];
</script>
