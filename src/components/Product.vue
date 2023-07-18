<script setup>
import ProductImage from "./ProductImage.vue";
import ProductDetail from "./ProductDetail.vue";

const props = defineProps({
  handleAddItem: Function,
  handleReduceItem: Function,
  handleAddToCart: Function,
  handleOpenLightBox: Function,
  handlePrev: Function,
  handleNext: Function,
  offsetY: [String, Number],
  itemCount: [String, Number],
  onMobile: Boolean,
});
</script>

<template>
  <div class="page-product fx cn even">
    <ProductImage
      :handleClick="handleOpenLightBox"
      :handlePrev="handlePrev"
      :handleNext="handleNext"
      :offsetY="offsetY"
      :onMobile="onMobile"
    />

    <ProductDetail
      :handleAddItem="handleAddItem"
      :handleReduceItem="handleReduceItem"
      :handleAddToCart="handleAddToCart"
      :itemCount="itemCount"
    />
  </div>
</template>
