<script setup>
	import Button from "./components/Button.vue";
	import { ref, computed } from "vue";

	const n = ref(0);

	function increment() {
	 n.value++
	}
</script>

<template>
	<Button :handleClick="increment"/>
		{{ n }}
</template>
