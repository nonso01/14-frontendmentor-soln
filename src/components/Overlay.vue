<script setup>
const props = defineProps({
  handleClick: Function,
});
</script>

<template>
  <div class="overlay" @click="handleClick"></div>
</template>
