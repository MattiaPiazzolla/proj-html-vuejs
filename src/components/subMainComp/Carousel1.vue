<script>
export default {};
</script>

<template>
	<div class="d-flex position-relative">
		<button @click="prev" class="custobtn prev">
			<i class="fa-solid fa-angle-left"></i>
		</button>
		<button @click="next" class="custobtn next">
			<i class="fa-solid fa-angle-right"></i>
		</button>
		<div class="col-6">
			<img
				src="../../assets/products-img/choco-chip-cookies.jpg"
				alt=""
				class="" />
		</div>
		<div class="col-6">
			<img
				src="../../assets/products-img/strawberry-jam-cookies.jpg"
				alt=""
				class="float-end" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "../../styles/generals.scss";
.custobtn {
	background-color: $color-primary;
	color: $color-white;
	opacity: 0.6;
	border: none;
	padding: 20px 10px;
	font-size: 1.5rem;
	font-weight: 100;
	position: absolute;
	transition: all 0.25s;

	&:hover {
		opacity: 1;
	}
}
.prev {
	bottom: 50%;
	transform: translateY(50%);
}
.next {
	bottom: 50%;
	right: 0;
	transform: translateY(50%);
}
img {
	width: 25vw;
}
</style>
