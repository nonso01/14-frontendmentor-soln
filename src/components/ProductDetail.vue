<script setup>
	import Text from "./Text.vue";
	import Heading from "./Heading.vue";
	import Button from "./Button.vue";
	import IconPlus from "./IconPlus.vue"
	import IconMinus from "./IconMinus.vue"


const props = defineProps({
  handleAddReduceItem: Function,
  handleAddToCart: Function,
  itemCount: [Number, String], // a second itemCount
});
</script>

<template>
  <div class="product-detail fx col even">
	  <div class="product-detail-title">
		  <Heading class="sm orange" text="SNEAKER COMPANY" />
		  <Heading text="Fall Limited Edition Sneakers" />
	  </div>

	  <div class="product-detail-text">
		  <Text text="These low-profile sneakers are your perfect casual wear companion. Featuring a 
			      durable rubber outer sole, they’ll withstand everything the weather can offer." />
	  </div>

	  <div class="product-detail-discount">
		  <div>
		  <span class="text xb"> $125.00 </span>
		  <span class="text discount">50%</span>
		  </div>
		  <Text text="$250.00" />
	  </div>

	  <div class="product-detail-calc fx even">
		  <div class="calc fx cn even">
			  <IconMinus :habdleClick="handleAddReduceItem" />
			  <Text text=0 />
			  <IconPlus :handleClick="handleAddReduceItem" />
		  </div>

		  <Button :hasIcon=true class="fx cn even" :handleClick="handleAddToCart" text="Add to cart" />
	  </div>

  </div>
</template>
