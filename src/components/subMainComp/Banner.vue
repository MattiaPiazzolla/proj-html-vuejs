<script>
export default {};
</script>

<template>
	<div class="container-fluid">
		<div class="row flex-wrap g-0">
			<div class="textContainer">
				<p class="text-uppercase sectionTitle">try our seasonal products</p>
				<h2>Order for pick-up or delivery to your home</h2>
				<button class="button">Shop Now</button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "../../styles/generals.scss";

.container-fluid {
	background-image: url("../../../public/images/call-to-action-bg.jpg");
	background-size: cover;
	background-position: center;
}

.row {
	padding: 20vh 5%;
}

.sectionTitle {
	color: rgb(190, 190, 190);
	font-size: 0.75rem;
}

h2 {
	color: $color-white;
	font-family: "DM Serif Text", serif;
	font-size: 2.5rem;
	font-weight: 900;
}

.textContainer {
	padding-left: 0;
	width: 100%;
	@media (min-width: 992px) {
		padding-left: 200px;
		width: 50%;
	}
}

.button {
	margin-top: 25px;
	color: $color-primary;
	background-color: $color-white;
	font-size: 0.9rem;
	font-weight: 500;
	padding: 15px 40px;
	font-family: "Inter", sans-serif;
	border: 1px solid transparent;
	border-radius: 5px;

	transition: all 0.25s;

	&:hover {
		color: $color-white;
		background-color: $color-primary;
		border: 1px solid $color-primary;
	}
}
</style>
