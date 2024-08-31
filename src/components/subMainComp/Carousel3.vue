<script>
import { arrays } from "../../arrays";

export default {
	data() {
		return {
			arrays,
		};
	},
};
</script>

<template>
	<div class="carousel-container w-100 d-flex position-relative">
		<button @click="prev" class="custobtn prev">
			<i class="fa-solid fa-angle-left"></i>
		</button>
		<button @click="next" class="custobtn next">
			<i class="fa-solid fa-angle-right"></i>
		</button>
		<div class="imgs d-flex overflow-scroll w-100">
			<div
				v-for="item in arrays.cookies"
				:key="item"
				class="carousel-images pe-2">
				<img
					:src="`../../../public/products-img/${item.link}`"
					:alt="item.name"
					class="carousel-image" />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import "../../styles/generals.scss";

.carousel-container {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin: auto;
}

.custobtn {
	background-color: $color-primary;
	color: $color-white;
	opacity: 0.6;
	border: none;
	padding: 25px 15px;
	font-size: 1.5rem;
	font-weight: 100;
	position: absolute;
	transition: all 0.25s;

	&:hover {
		opacity: 1;
	}
}

.prev {
	left: 0;
}

.next {
	right: 0;
}

.carousel-images {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	width: 50%;
	margin: 0 10px 0 0;
}

.carousel-image {
	height: auto;
	width: 675px;
}
</style>
