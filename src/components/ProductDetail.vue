<script setup>
const props = defineProps({
  handleAddReduceItem: Function,
  handleAddToCart: Function,
  itemCount: [Number, String],
});
</script>

<template>
  <div class="product-detail"></div>
</template>
