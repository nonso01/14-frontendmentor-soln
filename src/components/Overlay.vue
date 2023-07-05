<script setup>
	const props = defineProps({
	cover: Boolean
	})
</script>

<template>
	<div class="overlay" :class="{show: cover }"> </div>
</template>

