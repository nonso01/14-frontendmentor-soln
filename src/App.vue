<script setup>
import Overlay from "./components/Overlay.vue";
import LightBox from "./components/LightBox.vue";
import Menu from "./components/Menu.vue";

import CartBox from "./components/CartBox.vue";

import { ref, computed } from "vue";

const log = console.log;

const ImageYOffset = -25;

// reactive states down here

const toggleLightBox = ref(false);

const toggleCart = ref(false);

const nextPrev = ref(0);

const productItemCount = ref(2);

function handleNext() {
  nextPrev.value += ImageYOffset;
  nextPrev.value <= -100 ? (nextPrev.value = 0) : void 0;
  log(nextPrev.value);
}

function handlePrev() {
  nextPrev.value += -ImageYOffset;
  nextPrev.value > 0 ? (nextPrev.value += ImageYOffset) : void 0;
  log(nextPrev.value);
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

function handleItemCount() {}

function handleToggleCart() {
  toggleCart.value = !toggleCart.value;
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

  <Overlay v-if="toggleLightBox" :handleClick="handleLightBoxToggle" />

  <Menu
    :itemCount="productItemCount"
    :handleCart="handleToggleCart"
    :toggleCart="toggleCart"
  />

  <!--	<CartBox :itemCount=productItemCount /> -->
</template>
