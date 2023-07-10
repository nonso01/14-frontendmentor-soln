<script setup>
import Text from "./Text.vue";
import Heading from "./Heading.vue";
import Button from "./Button.vue";
import IconPlus from "./IconPlus.vue";
import IconMinus from "./IconMinus.vue";

const props = defineProps({
  handleAddItem: Function,
  handleReduceItem: Function,
  handleAddToCart: Function,
  itemCount: [Number, String], // a second itemCount pseudo
});
</script>

<template>
  <div class="product-detail fx col even">
    <div class="product-detail-title fx col even">
      <Heading class="sm orange" text="SNEAKER COMPANY" />
      <Heading text="Fall Limited Edition Sneakers" />
    </div>

    <div class="product-detail-text">
      <Text
        text="These low-profile sneakers are your perfect casual wear companion. Featuring a 
			      durable rubber outer sole, they’ll withstand everything the weather can offer."
      />
    </div>

    <div class="product-detail-discount">
      <div class="fx cn btw">
        <span class="text dark b lg"> $125.00 </span>
        <span class="text orange discount">50%</span>
      </div>
      <Text text="$250.00" class="strike" />
    </div>

    <div class="product-detail-calc fx even">
      <div class="calc fx cn even">
        <IconMinus :handleClick="handleReduceItem" />
        <Text :text="itemCount" />
        <IconPlus :handleClick="handleAddItem" />
      </div>

      <Button
        :hasIcon="true"
        class="fx cn even"
        :handleClick="handleAddToCart"
        text="Add to cart"
      />
    </div>
  </div>
</template>
