<script setup>
const props = defineProps({
  text: [String, Number],
});
</script>

<template>
  <p class="text">{{ text }}</p>
</template>
