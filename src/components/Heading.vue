<script setup>
const props = defineProps({
  text: [String, Number],
});
</script>

<template>
  <h1 class="title">{{ text }}</h1>
</template>
