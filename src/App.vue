<script setup>
	import IconPlus from "./components/IconPlus.vue";
	import { ref, computed } from "vue";

	const log = console.log

	const int = ref(0)

	const a = () => int.value++ && log(int.value)

</script>

<template>
	<IconPlus :handleClick="a"/>
</template>
