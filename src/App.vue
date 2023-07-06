<script setup>
	import Button from "./components/Button.vue";
	import IconCart from "./components/IconCart.vue";
	import { ref, computed } from "vue";

	const log = console.log

	const int = ref(0)

	const a = () => {
	int.value++
	log(int.value)
	}

</script>

<template>
	<Button :hasIcon=true :handleClick="a" text="button" />
</template>
