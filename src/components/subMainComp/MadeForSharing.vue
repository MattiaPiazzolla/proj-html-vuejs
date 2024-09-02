<script>
export default {};
</script>

<template>
	<div class="container-fluid">
		<div class="row flex-wrap g-0">
			<div class="col-6 col-md-3 p-1 p-md-2 p-xl-4 order-1 order-md-0">
				<div class="imgBase">
					<img src="../../../public/images/social-1.jpg" alt="" />
				</div>
			</div>
			<div class="col-12 col-md-6 p-1 p-md-2 p-xl-4 order-0 order-md-1">
				<div class="socialCTA">
					<p class="text-uppercase sectionTitle">made for sharing</p>
					<h2>Let's stay in touch</h2>
					<button class="button">
						<i class="fab fa-instagram me-1"></i>Follow Us
					</button>
				</div>
			</div>
			<div class="col-6 col-md-3 p-1 p-md-2 p-xl-4 order-1 order-md-1">
				<div class="imgBase">
					<img src="../../../public/images/social-2.jpg" alt="" />
				</div>
			</div>
			<div class="col-6 col-md-3 p-1 p-md-2 p-xl-4 order-1 order-md-1">
				<div class="imgBase">
					<img src="../../../public/images/social-3.jpg" alt="" />
				</div>
			</div>
			<div class="col-6 col-md-3 p-1 p-md-2 p-xl-4 order-1 order-md-1">
				<div class="imgBase">
					<img src="../../../public/images/social-4.jpg" alt="" />
				</div>
			</div>
			<div class="col-6 col-md-3 p-1 p-md-2 p-xl-4 order-1 order-md-1">
				<div class="imgBase">
					<img src="../../../public/images/social-5.jpg" alt="" />
				</div>
			</div>
			<div class="col-6 col-md-3 p-1 p-md-2 p-xl-4 order-1 order-md-1">
				<div class="imgBase">
					<img src="../../../public/images/social-6.jpg" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "../../styles/generals.scss";

.row {
	padding: 10vh 5%;
}

.sectionTitle {
	margin-top: 15px;
	color: rgb(165, 165, 165);
	font-size: 0.75rem;
	@media (min-width: 992px) {
		margin-top: 0;
	}
}

h2 {
	color: $color-primary;
	font-family: "DM Serif Text", serif;
	font-size: 1.5rem;
	font-weight: 900;
	@media (min-width: 992px) {
		font-size: 2.25rem;
	}
}

.button {
	margin-top: 15px;
	margin-bottom: 25px;
	color: $color-light-1;
	background-color: $color-primary;
	font-size: 0.9rem;
	font-weight: 500;
	padding: 15px 40px;
	font-family: "Inter", sans-serif;
	border: 1px solid transparent;
	border-radius: 5px;

	transition: all 0.25s;

	&:hover {
		color: $color-primary;
		background-color: $color-light-1;
		border: 1px solid $color-primary;
	}
	@media (min-width: 768px) {
		padding: 5px 20px;
		margin-top: 10px;
		margin-bottom: 0;
	}
	@media (min-width: 992px) {
		padding: 15px 40px;
		margin-top: 25px;
	}
}

.socialCTA {
	background-color: $color-light-1;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.imgBase {
	aspect-ratio: 1/1;
	background-size: cover;
	width: 100%;
}

img {
	width: 100%;
	aspect-ratio: 1/1;
}
</style>
