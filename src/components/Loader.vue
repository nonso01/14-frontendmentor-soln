<script setup>
import Text from "./Text.vue";
const props = defineProps({
  loaderProgress: [String, Number],
});
</script>

<template>
  <div
    class="loader fx cn text dark sm"
    :style="{ '--progress': loaderProgress }"
  >
    {{ loaderProgress }} %
  </div>
</template>
