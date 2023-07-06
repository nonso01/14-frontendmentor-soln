<script setup>
	const props = defineProps({
	handleClick: Function
	})
</script>

<template>
	<div class="icon move" @click="handleClick">
	<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill-rule="evenodd"/></svg>
	</div>
</template>

