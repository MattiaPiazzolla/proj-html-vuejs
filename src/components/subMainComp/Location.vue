<script>
export default {};
</script>

<template>
	<div class="container-fluid">
		<div class="row rowBase">
			<p class="text-uppercase sectionTitle text-center">locations</p>
			<h3 class="text-center title">Visit our Bakeries</h3>
			<div class="col-12 col-md-6 p-0 left">
				<img src="../../../public/images/new-york-bk-1200x794.jpg" alt="" />
				<h3 class="text-center my-5">New York</h3>
				<div class="row">
					<div class="col-4 text-center infoContainer mb-4">
						<p class="titleInfo m-1">call us</p>
						<p class="info">1.800.458.556</p>
					</div>
					<div class="col-4 text-center infoContainer mb-4">
						<p class="titleInfo m-1">open all week</p>
						<p class="info">9:00am - 6:00pm</p>
					</div>
					<div class="col-4">
						<div class="infoContainer d-flex justify-content-center">
							<button class="button mx-auto">View Map</button>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-6 p-0 mt-5 mt-md-0 right">
				<img src="../../../public/images/london-bk-1200x794.jpg" alt="" />
				<h3 class="text-center my-5">London</h3>
				<div class="row">
					<div class="col-4 text-center infoContainer mb-4">
						<p class="titleInfo m-1">call us</p>
						<p class="info">1.800.458.556</p>
					</div>
					<div class="col-4 text-center infoContainer mb-4">
						<p class="titleInfo m-1">open all week</p>
						<p class="info">9:00am - 6:00pm</p>
					</div>
					<div class="col-4">
						<div class="infoContainer d-flex justify-content-center">
							<button class="button mx-auto">View Map</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "../../styles/generals.scss";
.rowBase {
	padding: 10vh 5%;
}

.sectionTitle {
	color: rgb(125, 125, 125);
	font-size: 0.75rem;
}
.title {
	margin-bottom: 2rem;
	@media (min-width: 768px) {
		margin-bottom: 5rem;
	}
}
h3 {
	color: $color-primary;
	font-family: "DM Serif Text", serif;
	font-weight: 600;
	font-size: 2.25rem;
}
.left {
	background-color: #f1f9fb;
}
.right {
	background-color: #faf3e3;
}
img {
	width: 100%;
}
.infoContainer {
	text-transform: uppercase;
	color: rgb(145, 145, 145);

	.titleInfo {
		font-size: 0.8rem;
		@media (min-width: 768px) {
			font-size: 0.6rem;
		}
		@media (min-width: 992px) {
			font-size: 0.8rem;
		}
	}
	.info {
		font-size: 1.05rem;
		@media (min-width: 768px) {
			font-size: 0.8rem;
		}
		@media (min-width: 992px) {
			font-size: 1.05rem;
		}
	}
}
.button {
	color: $color-primary;
	background-color: $color-white;
	font-size: 0.9rem;
	padding: 15px 40px;
	font-family: "Inter", sans-serif;
	border: none;
	border-radius: 5px;
	transition: all 0.25s;

	&:hover {
		color: $color-light-1;
		background-color: $color-primary;
	}
	@media (min-width: 768px) {
		padding: 15px 10px;
	}
	@media (min-width: 992px) {
		padding: 15px 20px;
	}
	@media (min-width: 992px) {
		padding: 15px 25px;
	}
	@media (min-width: 1200px) {
		padding: 15px 30px;
	}
	@media (min-width: 1400px) {
		padding: 15px 40px;
	}
}
</style>
