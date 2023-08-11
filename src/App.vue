<script setup>
import Overlay from "./components/Overlay.vue";
import LightBox from "./components/LightBox.vue";
import Menu from "./components/Menu.vue";
import MobileMenu from "./components/MobileMenu.vue";
import Product from "./components/Product.vue";
import Modal from "./components/Modal.vue";

import { ref, Transition, watch } from "vue";

const log = console.log;
console.clear();

const app = document.querySelector("#app");

const ImageYOffset = -25; // would have used a smaller int

const maxItem = 30;

const ONESEC = 1000;

const mobileMedia = window.matchMedia("(max-width: 550px)");

// reactive states down here

const onMobile = ref(mobileMedia.matches);

const toggleLightBox = ref(false);

const toggleCart = ref(false);

const nextPrev = ref(0);

const productItemCount = ref(0);

const pseudoItemCount = ref(0);

const deleteItem = ref(true); // i assume there is nothing initially

const mobileToggleMenu = ref(false);

const toggleModal = ref(false);

const modalText = ref("");


mobileMedia.onchange = (e) => {
  onMobile.value = e.target.matches;
};

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
  toggleModal.value = true;
  modalText.value = "Item(s) deleted";
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
  } else {
    toggleModal.value = true;
    modalText.value = "No items added";
  }
}

function handleMobileToggleMenu() {
  mobileToggleMenu.value = !mobileToggleMenu.value;
}

function handleToggleModal() {
  toggleModal.value = !toggleModal.value;
}

watch(toggleModal, () => {
  const st = setTimeout(() => (toggleModal.value = false), ONESEC * 2);
  !toggleModal.value ? clearTimeout(st) : void 0;
});
</script>

<template>
  <template v-if="!onMobile">
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
  </template>

  <Transition name="cart-fade">
    <Modal
      v-if="toggleModal"
      :text="modalText"
      :handleCancel="handleToggleModal"
    />
  </Transition>

  <Transition>
    <Overlay v-if="mobileToggleMenu" :handleClick="handleMobileToggleMenu" />
  </Transition>

  <Transition name="cart-fade">
    <MobileMenu v-if="mobileToggleMenu" :handleMenu="handleMobileToggleMenu" />
  </Transition>


  <Menu
    :itemCount="productItemCount"
    :handleCart="handleToggleCart"
    :handleDelete="handleDeleteCartItem"
    :handleMenu="handleMobileToggleMenu"
    :toggleCart="toggleCart"
    :deleteItem="deleteItem"
    :onMobile="onMobile"
  />

  <Product
    :handleOpenLightBox="handleOpenLightBox"
    :handleAddItem="handleAddItem"
    :handleReduceItem="handleReduceItem"
    :handleAddToCart="handleAddToCart"
    :handlePrev="handlePrev"
    :handleNext="handleNext"
    :offsetY="nextPrev"
    :itemCount="pseudoItemCount"
    :onMobile="onMobile"
  />
</template>
