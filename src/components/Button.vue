<script setup>
import IconCart from "./IconCart.vue";

const props = defineProps({
  text: [String, Number],
  hasIcon: Boolean,
  handleClick: Function,
});
</script>

<template>
  <button v-if="hasIcon" class="btn" @click="handleClick">
    <IconCart /> {{ text }}
  </button>

  <button v-else class="btn" @click="handleClick">
    {{ text }}
  </button>
</template>
