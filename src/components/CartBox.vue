<script setup>
import Button from "./Button.vue";
import Text from "./Text.vue";
import Heading from "./Heading.vue";
import IconDelete from "./IconDelete.vue";
import img_thumbnail_one from "../assets/images/image-product-1-thumbnail.jpg";

import { ref, computed } from "vue";

const props = defineProps({
  handleCheckout: Function,
  handleDelete: Function,
  itemCount: [String, Number],
  deleteItem: Boolean,
});

const price = 125.0;
</script>

<template>
  <div class="cart-box fx col even">
    <Heading text="Cart" class="md" />

    <hr />

    <div v-if="deleteItem" class="cart-details fx col even cn">
      <div class="cart-summary fx even cn">
        <div class="cart-thumbnail">
          <img :src="img_thumbnail_one" alt="thumbnail" />
        </div>

        <div class="cart-calc">
          <Text text="Fall Limited Edition Sneakers" />
          <div>
            <span class="text"> $125.00 x </span>
            <span class="text"> {{ itemCount }} </span>
            <span class="text b dark">
              {{ "  $" + price * itemCount + ".00" }}
            </span>
          </div>
        </div>

        <IconDelete :handleClick="handleDelete" />
      </div>
      <Button text="Checkout" :handleClick="handleCheckout" />
    </div>

    <div v-else class="cart-no-detail fx cn">
      <Text text="Your cart is empty" />
    </div>
  </div>
</template>
