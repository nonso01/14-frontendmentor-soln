<script setup>
const props = defineProps({
  handleClick: Function,
});
// stroke #1d2020 in path
</script>

<template>
  <div class="icon next move fx cn" @click="handleClick">
    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
      <path d="m2 1 8 8-8 8" stroke-width="3" fill-rule="evenodd" />
    </svg>
  </div>
</template>
