<script setup>
import Text from "./Text.vue";
import IconClose from "./IconClose.vue";

const props = defineProps({
  text: String,
  handleCancel: Function,
});
</script>

<template>
  <div class="modal fx cn btw">
    <Text :text="text" class="white" />
    <IconClose :handleClick="handleCancel" />
  </div>
</template>
