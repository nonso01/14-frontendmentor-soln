<script setup>
	import Overlay from "./components/Overlay.vue";
	import LightBox from "./components/LightBox.vue";

	import { ref, computed } from "vue";

	const log = console.log;

	const ImageYOffset = -25;

	const toggleLightBox = ref(true);

	const nextPrev = ref(0)

	function handleNext() {
	nextPrev.value += ImageYOffset
	nextPrev.value <= -100 ? (nextPrev.value = 0) : void 0
	log(nextPrev.value)
	}

	function handlePrev() {
	nextPrev.value += -ImageYOffset
	nextPrev.value > 0 ? (nextPrev.value += ImageYOffset) : void 0
	log(nextPrev.value)
	}

	function handleLightBoxToggle() {
	toggleLightBox.value = false;
	}


</script>

<template>
	<LightBox 
	v-if="toggleLightBox"
	:handleNext="handleNext"
	:handlePrev="handlePrev"
	:offsetY=nextPrev 
	:handleClose="handleLightBoxToggle" />

<!--	<Overlay v-if="toggleLightBox"
		 :handleClick="handleLightBoxToggle"/> -->
</template>
