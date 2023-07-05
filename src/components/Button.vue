<script setup>
	import { ref } from "vue";

	defineProps({
	text: String,
	click: Function
	})

</script>

<template>
	<button class="btn" @click="click"> {{ text }} </button>
</template>
