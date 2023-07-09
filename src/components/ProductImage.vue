<script setup>
import img_product_one from "../assets/images/image-product-1.jpg";
import img_product_two from "../assets/images/image-product-2.jpg";
import img_product_three from "../assets/images/image-product-3.jpg";
import img_product_four from "../assets/images/image-product-4.jpg";

import img_thumbnail_one from "../assets/images/image-product-1-thumbnail.jpg";
import img_thumbnail_two from "../assets/images/image-product-2-thumbnail.jpg";
import img_thumbnail_three from "../assets/images/image-product-3-thumbnail.jpg";
import img_thumbnail_four from "../assets/images/image-product-4-thumbnail.jpg";

const props = defineProps({
  onMobile: Boolean,
  toggleLightBox: Boolean,
  handleProductImg: Function,
});

const img_product = {
  one: img_product_one,
  two: img_product_two,
  three: img_product_three,
  four: img_product_four,
};

const img_thumbnail = {
  one: img_thumbnail_one,
  two: img_thumbnail_two,
  three: img_thumbnail_three,
  four: img_thumbnail_four,
};
</script>

<template>
  <div class="product-image fx col btw">
    <div class="product-image-large">
      <div class="no-overflow">
        <div class="img_product">
          <img v-for="item in img_product" :src="item" alt="product image" />
        </div>
      </div>
    </div>

    <div v-if="onMobile"><!-- hide this --></div>

    <div v-else class="product-image-small fx cn btw">
      <div
        v-for="(item, key) in img_thumbnail"
        class="img-thumbnail"
        :data-img-pos="key"
      >
        <img :src="item" alt="thumbnail" />
      </div>
    </div>
  </div>
</template>
