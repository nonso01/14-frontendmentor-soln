<script setup>
import Logo from "./Logo.vue";
import IconCart from "./IconCart.vue";
import IconMenu from "./IconMenu.vue";
import Avatar from "./Avatar.vue";
import CartBox from "./CartBox.vue";

import { Transition } from "vue";

const props = defineProps({
  pageLogoColor: String,
  itemCount: Number,
  handleDelete: Function,
  handleCheckout: Function,
  handleCart: Function,
  handleMenu: Function,
  toggleCart: Boolean,
  deleteItem: Boolean,
  onMobile: Boolean,
});

const menuItems = ["Collections", "Men", "Women", "Abourt", "Contact"];
</script>

<template>
  <div class="page-menu fx cn btw">
    <template v-if="!onMobile">
      <div class="page-logo-nav fx cn btw">
        <Logo :color="pageLogoColor" />

        <div class="nav">
          <ul class="fx even">
            <li v-for="list in menuItems" class="text">{{ list }}</li>
          </ul>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="page-logo-nav fx cn btw">
        <IconMenu :handleClick="handleMenu" />
        <Logo :color="pageLogoColor" />
      </div>
    </template>

    <div class="page-cart-avatar fx cn even">
      <IconCart
        :deleteItem="deleteItem"
        :itemCount="itemCount"
        :handleClick="handleCart"
      />
      <Avatar :handleClick="handleCart" />

      <Transition name="cart-fade">
        <CartBox
          v-if="toggleCart"
          :handleDelete="handleDelete"
          :handleCheckout="handleCheckout"
          :itemCount="itemCount"
          :deleteItem="deleteItem"
        />
      </Transition>
    </div>
  </div>
</template>
