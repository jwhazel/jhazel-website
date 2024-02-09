<template>
  <article>
    <NuxtLink :to="article._path">
      <h2>{{ article.title }}</h2>
      <p>{{ article.description }}</p>
    </NuxtLink>
  </article>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
  },
});
</script>
