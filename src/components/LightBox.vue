<script setup>
	import img_product_one from "../assets/images/image-product-1.jpg";
	import img_product_two from "../assets/images/image-product-2.jpg";
	import img_product_three from "../assets/images/image-product-3.jpg";
	import img_product_four from "../assets/images/image-product-4.jpg";

	import img_thumbnail_one from "../assets/images/image-product-1-thumbnail.jpg";
	import img_thumbnail_two from "../assets/images/image-product-2-thumbnail.jpg";
	import img_thumbnail_three from "../assets/images/image-product-3-thumbnail.jpg";
	import img_thumbnail_four from "../assets/images/image-product-4-thumbnail.jpg";
	import IconClose from "./IconClose.vue";
	import IconNext from "./IconNext.vue";
	import IconPrevious from "./IconPrevious.vue";

	const props = defineProps({
	handleClose: Function,
	handleNext: Function,
	handlePrev: Function,
	offsetY: [String, Number],
	})

        const img_product = {
	one: img_product_one,
	two: img_product_two,
	three: img_product_three,
	four: img_product_four,
	}

        const img_thumbnail = {
	one: img_thumbnail_one,
	two: img_thumbnail_two,
	three: img_thumbnail_three,
	four: img_thumbnail_four,
	}
</script>

<template>
	<div class="light-box fx col cn even">
		<div class="close-icon">
			<IconClose :handleClick="handleClose" />
		</div>

		<div class="light-box-product">
			<div class="no-overflow">

				<div class="light-box-product-img" :style="{'--offsetY': offsetY}">
				<img v-for="item in img_product" :src="item" alt="img product" />
			</div>

			</div>

			<IconPrevious :handleClick="handlePrev"/>
			<IconNext :handleClick="handleNext"/>
		</div>

		<div class="light-box-thumbnails fx cn even">
			<div class="thumbnail" v-for="img in img_thumbnail">
				<img :src="img"
				alt="thumbnail" />
			</div>
		</div>
	</div>
</template>

