<template>
  <div v-if="blogs.length">
    <PostListItem v-for="(post, index) in blogs" :key="index" :article="post" />
  </div>
  <div v-else>No posts found</div>
</template>

<script setup>
const { data: blogs } = await useAsyncData("blogs", async () =>
  queryContent("blog")
    .sort({ date: -1 })
    .only(["_path", "title", "description"])
    .find()
);
</script>
