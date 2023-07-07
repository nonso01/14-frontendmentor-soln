<script setup>
	import Logo from "./Logo.vue";
	import IconCart from "./IconCart.vue";
	import Avatar from "./Avatar.vue";

	const props = defineProps({
	pageLogoColor: String,
	itemCount: Number,
	});

	const menuItems = [
	"Collections",
	"Men",
	"Women",
	"Dark",
	"Light"
	];
</script>

<template>
	<div class="page-menu fx btw">
		<div class="page-logo-nav fx cn btw">
			<Logo :color="pageLogoColor" />

			<div class="nav">
				<ul class="fx even">
					<li v-for="list in menuItems" class="text"> {{ list }} </li>
				</ul>
			</div>
		</div>

		<div class="page-cart-avatar fx cn even">
			<IconCart :itemCount="itemCount" />
			<Avatar />
		</div>


	</div>
</template>

