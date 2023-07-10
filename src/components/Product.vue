<script setup>
import ProductImage from "./ProductImage.vue";
import ProductDetail from "./ProductDetail.vue";

const props = defineProps({
  handleAddReduceItem: Function,
  handleOpenLightBox: Function,
  offsetY: [String, Number],
});
</script>

<template>
  <div class="page-product fx cn even">
    <ProductImage :handleClick="handleOpenLightBox" :offsetY="offsetY" />

    <ProductDetail />
  </div>
</template>
