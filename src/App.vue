<script setup>
import Overlay from "./components/Overlay.vue";
import LightBox from "./components/LightBox.vue";
import Menu from "./components/Menu.vue";
import Product from "./components/Product.vue";

import { ref, Transition } from "vue";

const log = console.log;

const ImageYOffset = -25;

// reactive states down here

const toggleLightBox = ref(false);

const toggleCart = ref(false);

const nextPrev = ref(0);

const productItemCount = ref(5);

const deleteItem = ref(!false); // testing

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

function handleItemCount() {}

function handleToggleCart() {
  toggleCart.value = !toggleCart.value;
}

function handleDeleteCartItem() {
  productItemCount.value = 0;
  deleteItem.value = !deleteItem.value;
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

  <Product :handleOpenLightBox="handleOpenLightBox" :offsetY=nextPrev />
</template>
