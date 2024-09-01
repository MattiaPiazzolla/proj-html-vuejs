<script>
import BoxLayoutSection from "./subMainComp/BoxLayoutSection.vue";
import CorporateWedding from "./subMainComp/CorporateWedding.vue";
import Jumbo from "./subMainComp/Jumbo.vue";
import OurProducts from "./subMainComp/OurProducts.vue";
import Location from "./subMainComp/Location.vue";
import MadeForSharing from "./subMainComp/MadeForSharing.vue";

export default {
	components: {
		Jumbo,
		OurProducts,
		CorporateWedding,
		BoxLayoutSection,
		Location,
		MadeForSharing,
	},
};
</script>

<template>
	<Jumbo />
	<OurProducts />
	<CorporateWedding />
	<BoxLayoutSection />
	<Location />
	<MadeForSharing />
</template>

<style lang="scss" scoped>
@import "../styles/generals.scss";
</style>
