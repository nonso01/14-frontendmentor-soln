<script setup>
	import img_avatar from "../assets/images/image-avatar.png";

	const props = defineProps({
	handleClick: Function,
	})
</script>

<template>
	<div class="img-avatar" @click="handleClick">
		<img :src="img_avatar" alt="product avatar" />
	</div>
</template>

