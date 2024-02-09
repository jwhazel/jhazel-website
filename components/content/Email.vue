<template>
  <a :href="mailLink">{{ emailAddress }}</a>
</template>

<script setup>
const props = defineProps({
  emailAddress: { type: String, required: true },
});

const decrypt = () => {};

const mailLink = computed(() => {
  return `mailto:${props.emailAddress}`;
});
</script>
