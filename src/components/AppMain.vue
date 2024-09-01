<script>
import BoxLayoutSection from "./subMainComp/BoxLayoutSection.vue";
import CorporateWedding from "./subMainComp/CorporateWedding.vue";
import Jumbo from "./subMainComp/Jumbo.vue";
import OurProducts from "./subMainComp/OurProducts.vue";

export default {
	components: {
		Jumbo,
		OurProducts,
		CorporateWedding,
		BoxLayoutSection,
	},
};
</script>

<template>
	<Jumbo />
	<OurProducts />
	<CorporateWedding />
	<BoxLayoutSection />
</template>

<style lang="scss" scoped>
@import "../styles/generals.scss";
</style>
