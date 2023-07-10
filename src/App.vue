<script setup>
import Overlay from "./components/Overlay.vue";
import LightBox from "./components/LightBox.vue";
import Menu from "./components/Menu.vue";
import Product from "./components/Product.vue";

import { ref, Transition } from "vue";

const log = console.log;

const ImageYOffset = -25;
const maxItem = 30;

// reactive states down here

const toggleLightBox = ref(false);

const toggleCart = ref(false);

const nextPrev = ref(0);

const productItemCount = ref(0);

const pseudoItemCount = ref(0);

const deleteItem = ref(true); // i assume they is nothing initially

function handleNext() {
  nextPrev.value += ImageYOffset;
  nextPrev.value <= -100 ? (nextPrev.value = 0) : void 0;
}

function handlePrev() {
  nextPrev.value += -ImageYOffset;
  nextPrev.value > 0 ? (nextPrev.value += ImageYOffset) : void 0;
}

function handleLightBoxToggle() {
  toggleLightBox.value = false;
}

function handleLightBoxClick(e) {
  if (e) {
    const { imgPos } = e.target.dataset;

    switch (imgPos) {
      case "one":
        nextPrev.value = 0;
        break;
      case "two":
        nextPrev.value = -25;
        break;
      case "three":
        nextPrev.value = -50;
        break;
      case "four":
        nextPrev.value = -75;
        break;
      default:
        nextPrev.value = 0;
        break;
    }
  }
}

function handleOpenLightBox(e) {
  if (e && e.target?.dataset) {
    toggleLightBox.value = true;
  }
}

function handleToggleCart() {
  toggleCart.value = !toggleCart.value;
}

function handleDeleteCartItem() {
  productItemCount.value = 0;
  deleteItem.value = !deleteItem.value;
}

function handleAddItem() {
  pseudoItemCount.value += 1;
  pseudoItemCount.value > maxItem ? (pseudoItemCount.value = maxItem) : void 0;
}

function handleReduceItem() {
  pseudoItemCount.value -= 1;
  pseudoItemCount.value < 0 ? (pseudoItemCount.value = 0) : void 0;
}

function handleAddToCart() {
  if (pseudoItemCount.value > 0) {
    deleteItem.value = false; // excuse me for this
    productItemCount.value = pseudoItemCount.value;
  }
}
</script>

<template>
  <LightBox
    v-if="toggleLightBox"
    :handleNext="handleNext"
    :handlePrev="handlePrev"
    :offsetY="nextPrev"
    :handleClose="handleLightBoxToggle"
    :handleClick="handleLightBoxClick"
  />

  <Transition>
    <Overlay v-if="toggleLightBox" :handleClick="handleLightBoxToggle" />
  </Transition>

  <Menu
    :itemCount="productItemCount"
    :handleCart="handleToggleCart"
    :handleDelete="handleDeleteCartItem"
    :toggleCart="toggleCart"
    :deleteItem="deleteItem"
  />

  <Product
    :handleOpenLightBox="handleOpenLightBox"
    :handleAddItem="handleAddItem"
    :handleReduceItem="handleReduceItem"
    :handleAddToCart="handleAddToCart"
    :offsetY="nextPrev"
    :itemCount="pseudoItemCount"
  />
</template>
