<script>
import { arrays } from "../arrays";
import BurgerMenu from "./subHeaderComp/BurgerMenu.vue";
import HeaderMenuVue from "./subHeaderComp/HeaderMenu.vue";

export default {
	data() {
		return {
			arrays,
		};
	},
	components: {
		HeaderMenuVue,
		BurgerMenu,
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
					v-for="item in arrays.headerMenu"
					:key="item.name"
					:item="item"
					class="d-none d-lg-block" />
			</ul>
			<!-- INIZIO -->
			<button
				class="btn btnOpen border-0 d-block d-lg-none"
				type="button"
				data-bs-toggle="offcanvas"
				data-bs-target="#staticBackdrop"
				aria-controls="staticBackdrop">
				<i class="fas fa-bars fw-bold"></i>
			</button>

			<div
				class="offcanvas offcanvas-bottom h-100"
				data-bs-backdrop="static"
				tabindex="-1"
				id="staticBackdrop"
				aria-labelledby="staticBackdropLabel">
				<div class="offcanvas-body">
					<button
						type="button"
						class="btn btnClose border-0 w-100 text-end"
						data-bs-dismiss="offcanvas"
						aria-label="Close">
						<i class="fas fa-xmark text-light"></i>
					</button>
					<ul class="p-0">
						<BurgerMenu
							v-for="item in arrays.headerMenu"
							:key="item.name"
							:item="item"
							class="d-block d-lg-none" />
					</ul>
				</div>
			</div>
			<!-- FINE -->
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "../styles/generals.scss";

.logoHeader {
	width: 50%;
	min-width: 100px;
}
.menu {
	display: flex;
	justify-content: end;
	align-items: center;
}
.btn {
	font-size: 2.5rem;
}
.btnClose {
	&:hover {
		color: $color-primary;
	}
}

.btnOpen {
	transition: all 0.25s;
	&:hover {
		transform: scale(1.1);

		i {
			filter: brightness(1.5);
		}
	}
	&:active {
		transform: scale(0.95);

		i {
			filter: brightness(0.75);
		}
	}
	i {
		color: $color-primary;
	}
}
.btn-close {
	color: $color-white;
}

.offcanvas {
	width: 100vw !important;
	background-color: $color-primary;
}
</style>
