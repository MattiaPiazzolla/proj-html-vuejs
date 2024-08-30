<script>
import { arrays } from "../arrays";
import FooterMenu from "./subFooterComp/FooterMenu.vue";
import FooterSocial from "./subFooterComp/FooterSocial.vue";

export default {
	data() {
		return {
			arrays,
		};
	},
	components: {
		FooterMenu,
		FooterSocial,
	},
};
</script>

<template>
	<div class="container-fluid p-5">
		<div class="row">
			<div class="col-6">
				<img
					src="../../public/images/avada-bakery-logo-retina.png"
					alt="logo"
					class="logoFooter" />
				<ul class="menu list-unstyled mb-0 mt-5">
					<FooterMenu
						v-for="item in arrays.footerMenuItems"
						:key="item.name"
						:item="item" />
				</ul>
			</div>
			<div class="col-6 d-flex flex-column">
				<h3 class="text-end">Subscribe to our newsletter</h3>
				<div class="subscribeContainer">
					<input
						type="email"
						placeholder="Enter email adress*"
						class="subscribeInput" />
					<button class="btnCustom">Subscribe</button>
				</div>
			</div>
		</div>
		<div class="row bottomSection">
			<div class="col-12 d-flex justify-content-between">
				<p class="copyStyle">
					©Copyright 2012-2020 | Avada Theme by ThemeFusion | All Right Reserved
					| Powered by WordPress
				</p>
				<div class="iconsContainer">
					<FooterSocial
						v-for="social in arrays.socialIcons"
						:key="social"
						:social="social" />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "../styles/generals.scss";

.logoFooter {
	width: 22.5%;
	min-width: 100px;
}
h3 {
	color: $color-primary;
	font-size: 1.3rem;
	font-family: "DM Serif Text", serif;
	margin-bottom: 50px;
}

.menu {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.subscribeContainer {
	display: flex;
	justify-content: flex-end;
}

.subscribeInput {
	width: 50%;
	margin-right: 20px;
	padding: 10px;
	font-size: 0.85rem;
	border-radius: 5px;
	border: 1px solid #ececec;
	font-family: "Inter", sans-serif;
}
.btnCustom {
	background-color: $color-primary;
	color: $color-white;
	font-size: 0.75rem;
	padding: 10px 25px;
	border-radius: 5px;
	border: 1px solid;
	font-family: "Inter", sans-serif;
	font-weight: 600;
	transition: all 0.25s;
	&:hover {
		background-color: $color-light-1;
		color: $color-primary;
	}
}

.copyStyle {
	font-size: 0.65rem;
	color: #959595;
}

.bottomSection {
	margin-top: 100px;
}
</style>
