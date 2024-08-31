<script>
import Carousel1 from "./Carousel1.vue";
import Carousel2 from "./Carousel2.vue";
import Carousel3 from "./Carousel3.vue";

export default {
	components: {
		Carousel1,
		Carousel2,
		Carousel3,
	},
};
</script>

<template>
	<div class="container-fluid">
		<div class="row justify-content-between">
			<div class="col-4">
				<p class="text-uppercase sectionTitle">Our products</p>
				<h3>
					All our delectable pastries are backed fresh in our Kitchen very
					morning, and are made with all-natural, all organic ingredients.
				</h3>
				<button class="buttonHeader">Start Shopping</button>
			</div>
			<div class="col-7">
				<!-- <Carousel1 /> -->
				<Carousel2 />
				<!-- <Carousel3 /> -->
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "../../styles/generals.scss";

.container-fluid {
	padding: 25px 0;

	.sectionTitle {
		color: rgb(125, 125, 125);
		font-size: 0.75rem;
	}

	h3 {
		color: $color-primary;
		font-family: "DM Serif Text", serif;
		font-weight: 600;
		font-size: 2.25rem;
	}

	.buttonHeader {
		margin-top: 50px;
		color: $color-light-1;
		background-color: $color-primary;
		font-size: 0.9rem;
		padding: 15px 40px;
		font-family: "Inter", sans-serif;
		border: none;
		border-radius: 5px;
		transition: all 0.25s;

		&:hover {
			color: $color-primary;
			background-color: $color-light-1;
		}
	}

	.row {
		padding: 10vh 5%;
	}
}
</style>
