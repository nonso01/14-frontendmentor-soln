<script setup>
import ProductImage from "./ProductImage.vue";
import ProductDetail from "./ProductDetail.vue";

const props = defineProps({
  handleAddItem: Function,
  handleReduceItem: Function,
  handleAddToCart: Function,
  handleOpenLightBox: Function,
  offsetY: [String, Number],
  itemCount: [String, Number],
});
</script>

<template>
  <div class="page-product fx cn even">
    <ProductImage :handleClick="handleOpenLightBox" :offsetY="offsetY" />

    <ProductDetail
      :handleAddItem="handleAddItem"
      :handleReduceItem="handleReduceItem"
      :handleAddToCart="handleAddToCart"
      :itemCount="itemCount"
    />
  </div>
</template>
