<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import { arrays } from "../../arrays";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
	name: "Breakpoints",
	components: {
		Carousel,
		Slide,
	},
	data() {
		return {
			settings: {
				itemsToShow: 1,
				snapAlign: "center",
			},
			breakpoints: {
				700: {
					itemsToShow: 2,
					snapAlign: "center",
				},
				1024: {
					itemsToShow: 4,
					snapAlign: "start",
				},
			},
		};
	},
	methods: {
		goPrev() {
			this.$refs.carousel.prev();
		},
		goNext() {
			this.$refs.carousel.next();
		},
		getCookies() {
			return arrays;
		},
	},
});
</script>

<template>
	<Carousel ref="carousel" v-bind="settings" :breakpoints="breakpoints">
		<Slide v-for="cookie in getCookies().cookies" :key="cookie.name">
			<div>
				<div class="position-relative">
					<div class="hover-slide">
						<div class="overlay">
							<p>SELECT OPTIONS / QUICK VIEW</p>
						</div>
					</div>
					<div class="cookie-slide">
						<img :src="`/products-img/${cookie.link}`" :alt="cookie.name" />
					</div>
				</div>
				<div class="lable">
					<h3 class="d-block">{{ cookie.name }}</h3>
					<p>{{ cookie.price.join(" - ") }}</p>
				</div>
			</div>
		</Slide>

		<template #addons>
			<button @click="goPrev" class="custobtn prev">
				<i class="fas fa-chevron-left"></i>
			</button>
			<button @click="goNext" class="custobtn next">
				<i class="fas fa-chevron-right"></i>
			</button>
		</template>
	</Carousel>
</template>

<style lang="scss" scoped>
@import "../../styles/generals.scss";

.cookie-slide {
	display: flex;

	img {
		padding: 10px;
		width: 100%;
		height: auto;
	}
}
.hover-slide {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: $color-white;
	padding: 10px;
	height: 100%;
	width: 100%;

	.overlay {
		background-color: rgba(0, 0, 0, 0.35);
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		opacity: 0;
		transition: all 0.25s;

		&:hover {
			opacity: 1;
		}
		p {
			font-size: 0.9rem;
			color: $color-light-1;
		}
	}
}

.custobtn {
	background-color: $color-primary;
	color: $color-white;
	opacity: 0.55;
	border: none;
	padding: 35px 17.5px;
	font-size: 0.75rem;
	font-weight: 100;
	position: absolute;
	transition: all 0.25s;

	&:hover {
		opacity: 1;
	}
}

.lable {
	margin-top: 15px;
	color: $color-primary;
	min-height: 100px;

	h3 {
		font-family: "DM Serif Text", serif;
		text-transform: capitalize;
		font-weight: 600;
		font-size: 1.5rem;
	}
	p {
		font-weight: 200;
	}
}

.prev {
	left: 10px;
	transform: translateY(-50%);
	top: 46%;
}

.next {
	right: 10px;
	transform: translateY(-50%);
	top: 46%;
}
</style>
