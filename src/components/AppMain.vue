<script>
import Jumbo from "./subMainComp/Jumbo.vue";
import OurProducts from "./subMainComp/OurProducts.vue";

export default {
	components: {
		Jumbo,
		OurProducts,
	},
};
</script>

<template>
	<Jumbo />
	<OurProducts />
</template>

<style lang="scss" scoped>
@import "../styles/generals.scss";
</style>
