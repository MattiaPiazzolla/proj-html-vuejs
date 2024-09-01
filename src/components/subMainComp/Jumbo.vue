<script>
export default {};
</script>

<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-12 col-sm-9 col-md-8 col-lg-6 col-xl-4">
				<p class="text-uppercase sectionTitle">
					fresh &amp; tasty bakery every day
				</p>
				<h3>The Perfect Fresh Bread</h3>
				<p class="longText">
					Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl
					varius. Aliquam erat volutpat. Nullam quis sagittis nibh ac nulla id
					orci tempor.
				</p>
				<button class="buttonHeader">Explore our products</button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "../../styles/generals.scss";

.container-fluid {
	background-image: url("../../../public/images/hero-header-bakery.jpg");
	background-size: cover;
	background-repeat: repeat;
	padding: 100px 0;

	.sectionTitle {
		color: rgb(125, 125, 125);
		font-size: 0.75rem;
	}

	h3 {
		color: $color-primary;
		font-family: "DM Serif Text", serif;
		font-weight: 600;
		font-size: 3.5rem;
	}

	.longText {
		margin-top: 25px;
		font-size: 1.2rem;
		color: rgb(125, 125, 125);
	}

	.buttonHeader {
		margin-top: 25px;
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
	}

	.row {
		padding: 20vh 5%;
	}
}
</style>
