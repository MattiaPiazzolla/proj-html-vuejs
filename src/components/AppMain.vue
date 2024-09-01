<script>
import CorporateWedding from "./subMainComp/CorporateWedding.vue";
import Jumbo from "./subMainComp/Jumbo.vue";
import OurProducts from "./subMainComp/OurProducts.vue";

export default {
	components: {
		Jumbo,
		OurProducts,
		CorporateWedding,
	},
};
</script>

<template>
	<Jumbo />
	<OurProducts />
	<CorporateWedding />
</template>

<style lang="scss" scoped>
@import "../styles/generals.scss";
</style>
