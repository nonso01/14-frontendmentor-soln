<script setup>
import ProductImage from "./ProductImage.vue";
import ProductDetail from "./ProductDetail.vue";

const props = defineProps({
  handleAddItem: Function,
});
</script>

<template>
  <div class="page-product fx cn even">
    <ProductImage />

    <ProductDetail />
  </div>
</template>
