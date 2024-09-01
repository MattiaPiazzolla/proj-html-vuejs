<script>
import BoxLayoutSection from "./subMainComp/BoxLayoutSection.vue";
import CorporateWedding from "./subMainComp/CorporateWedding.vue";
import Jumbo from "./subMainComp/Jumbo.vue";
import OurProducts from "./subMainComp/OurProducts.vue";
import Location from "./subMainComp/Location.vue";

export default {
	components: {
		Jumbo,
		OurProducts,
		CorporateWedding,
		BoxLayoutSection,
		Location,
	},
};
</script>

<template>
	<Jumbo />
	<OurProducts />
	<CorporateWedding />
	<BoxLayoutSection />
	<Location />
</template>

<style lang="scss" scoped>
@import "../styles/generals.scss";
</style>
