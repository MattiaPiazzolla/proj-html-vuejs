<script>
import CarouselCorpWed from "./CarouselCorpWed.vue";

export default {
	components: {
		CarouselCorpWed,
	},
};
</script>

<template>
	<div class="container-fluid">
		<p class="sectionTitle text-uppercase">Corporate &amp; Weddings</p>
		<h3 class="text-capitalize">Baking special moments</h3>
		<div class="row">
			<div class="col-6 corpSide pe-5 ps-0">
				<img src="../../../public/images/corporate-bg.jpg" alt="" />
				<img
					src="../../../public/images/corporate-hover-bg.jpg"
					alt=""
					class="hoverImgCorp pe-5" />
				<div class="textHoverCont">
					<p>International Bakery</p>
					<h3 class="mb-0 text-capitalize">Corporate Events</h3>
					<button class="button">Explore more</button>
				</div>
			</div>
			<div class="col-6 wedSide ps-5 pe-0 overflow-hidden">
				<img src="../../../public/images/wedding-bg.jpg" alt="" />
				<img
					src="../../../public/images/wedding-hover-bg.jpg"
					alt=""
					class="hoverImgWed ps-5" />
				<div class="textHoverCont">
					<p>Private dining hall</p>
					<h3 class="mb-0 text-capitalize">Weddings &amp; Parties</h3>
					<button class="button">Explore more</button>
				</div>
			</div>
		</div>
		<div class="row sectionTwo">
			<div class="col-3 text-center">
				<h3>Find a freshly baked product perfect for you</h3>
				<p class="">
					Integer a nibh vitae ex porttitor rutrum et ut velit. Etiam ac felis
					at leo feugiat placerat. Sed ac nulla id orci tempor convallis sed.
				</p>
				<button class="button">Shop All Products</button>
			</div>
			<div class="col-9">
				<CarouselCorpWed />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "../../styles/generals.scss";

.sectionTitle {
	color: rgb(125, 125, 125);
	font-size: 0.75rem;
	text-align: center;
}
h3 {
	color: $color-primary;
	font-family: "DM Serif Text", serif;
	font-weight: 600;
	font-size: 2.25rem;
	text-align: center;
	margin-top: 25px;
}
.row {
	padding: 50px 5%;
}

.button {
	margin-top: 25px;
	color: $color-light-1;
	background-color: $color-primary;
	font-size: 0.9rem;
	font-weight: 500;
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

.corpSide,
.wedSide {
	position: relative;
	img {
		width: 100%;
	}
	.hoverImgCorp,
	.hoverImgWed {
		position: absolute;
		height: 100%;
		left: 0;
		top: 0;
		opacity: 0;
		transition: all 0.3s;
	}
	.textHoverCont {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		opacity: 0;
		transition: all 0.6s;

		p {
			color: $color-white;
			text-transform: uppercase;
			font-size: 0.75rem;
			font-weight: 300;
			margin-bottom: 10px;
			opacity: 0.65;
		}

		h3 {
			color: $color-white;
			margin-top: 0;
		}
	}
}
.corpSide:hover {
	.hoverImgCorp {
		opacity: 1;
	}
	.textHoverCont {
		opacity: 1;
	}
}
.wedSide:hover {
	.hoverImgWed {
		opacity: 1;
	}
	.textHoverCont {
		opacity: 1;
	}
}

.sectionTwo {
	margin-top: 100px;
	.col-3 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		p {
			color: rgb(125, 125, 125);
			text-align: center;
			margin-top: 25px;
		}
	}
}
</style>
