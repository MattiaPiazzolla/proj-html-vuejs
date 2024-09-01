<script>
export default {};
</script>

<template>
	<div class="container-fluid">
		<div class="row flex-wrap g-0">
			<div class="col-3 p-4">
				<div class="imgBase">
					<img src="../../../public/images/social-1.jpg" alt="" />
				</div>
			</div>
			<div class="col-6 p-4">
				<div class="socialCTA">
					<p class="text-uppercase sectionTitle">made for sharing</p>
					<h2>Let's stay in touch</h2>
					<button class="button">
						<i class="fab fa-instagram me-1"></i>Follow Us
					</button>
				</div>
			</div>
			<div class="col-3 p-4">
				<div class="imgBase">
					<img src="../../../public/images/social-2.jpg" alt="" />
				</div>
			</div>
			<div class="col-3 p-4">
				<div class="imgBase">
					<img src="../../../public/images/social-3.jpg" alt="" />
				</div>
			</div>
			<div class="col-3 p-4">
				<div class="imgBase">
					<img src="../../../public/images/social-4.jpg" alt="" />
				</div>
			</div>
			<div class="col-3 p-4">
				<div class="imgBase">
					<img src="../../../public/images/social-5.jpg" alt="" />
				</div>
			</div>
			<div class="col-3 p-4">
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
	aspect-ratio: 2/1;
}

.sectionTitle {
	color: rgb(165, 165, 165);
	font-size: 0.75rem;
}

h2 {
	color: $color-primary;
	font-family: "DM Serif Text", serif;
	font-size: 2.25rem;
	font-weight: 900;
}

.button {
	margin-top: 25px;
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
