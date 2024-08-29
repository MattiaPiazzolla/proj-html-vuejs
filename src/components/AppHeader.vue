<script>
import menuItems from "../arrays";
import HeaderMenuVue from "./subHeaderComp/HeaderMenu.vue";

export default {
	data() {
		return {
			menuItems,
		};
	},
	components: {
		HeaderMenuVue,
	},
};
</script>

<template>
	<div class="container-fluid position-absolute">
		<div class="d-flex justify-content-between align-content-center p-3">
			<div class="logoContainer">
				<img
					src="../../public/images/avada-bakery-logo-retina.png"
					alt="logo"
					class="logoHeader" />
			</div>
			<ul class="menu list-unstyled m-0">
				<HeaderMenuVue
					v-for="item in menuItems"
					:key="item.name"
					:item="item" />
			</ul>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "../styles/generals.scss";

.logoHeader {
	width: 35%;
}
.menu {
	display: flex;
	justify-content: end;
	align-items: center;
}
</style>
