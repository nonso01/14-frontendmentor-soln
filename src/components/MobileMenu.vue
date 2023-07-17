<script setup>
import IconClose from "./IconClose.vue";

const props = defineProps({
  handleMenu: Function,
});

const menuItems = ["Collections", "Men", "Women", "About", "Contact"];
</script>

<template>
  <div class="mobile-menu">
    <div class="menu fx col even">
      <IconClose :handleClick="handleMenu" />
      <ul class="fx col even">
        <li class="text dark" v-for="item in menuItems">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
