<script setup>
	const props = defineProps({
	text: {
	type: [String, Number],
	default: "button",
	},
	handleClick: Function
	})
</script>

<template>
	<button class="btn" @click="handleClick">
		{{ text }}
	</button>
</template>
