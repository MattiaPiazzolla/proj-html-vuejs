<script>
export default {};
</script>

<template>
	<div class="container-fluid">
		<div class="row rowGap">
			<div class="col-12 blockOne">
				<div class="row position-relative z-2 h-100">
					<div class="col-6">
						<h2>Tell us what you have in mind</h2>
					</div>
					<div class="col-6 d-flex flex-column justify-content-between">
						<p class="numeration">01</p>
						<div class="bottomConainerOne">
							<p class="text-uppercase sectionTitle">
								manual ingredients selection
							</p>
							<p class="contentText">
								Cras consequat lectus vestibulum tortor pulvinar, quis euismod
								nisl varius. Ut eu laoreet ex. Aliquam erat volutpat. Nullam
								quis sagittis nibh. Morbi consectetur ultricies ante ac congue.
								Donec lorem erat, finibus in velit placerat, rutrum augue.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col-6 blockTwo">
				<div class="row position-relative z-2 h-100">
					<div class="col-8 d-flex flex-column justify-content-between">
						<h2>We Start Baking</h2>
						<div class="bottomConainerTwo">
							<p class="text-uppercase sectionTitle">sweet &amp; delicious</p>
							<p class="contentText">
								Cras consequat lectus vestibulum tortor pulvinar, quis euismod
								nisl varius. Ut eu laoreet ex. Aliquam erat volutpat. Nullam
								quis sagittis nibh. Morbi consectetur ultricies ante ac congue.
								Donec lorem erat, finibus in velit placerat, rutrum augue.
							</p>
						</div>
					</div>
					<div class="col-4">
						<p class="numeration">02</p>
					</div>
				</div>
			</div>
			<div class="col-6 blockTwoRight">
				<div class="row">
					<p class="text-uppercase sectionTitle">sweet &amp; delicious</p>
					<h2>
						"Finally found an alternative to the mass produced products.
						Something that incorporates real organic ingredients, nutrient dense
						wellness while promoting sustainability and activity."
					</h2>
					<p class="credits">Rachel Cooper, Founder</p>
				</div>
			</div>
			<div class="col-12 blockThree">
				<div class="row position-relative z-2 h-100">
					<div class="col-6 d-flex flex-column justify-content-between">
						<h2>Delivered to your home</h2>
						<div class="bottomConainerThree">
							<p class="text-uppercase sectionTitle">
								baked to order &amp; gift wrapped
							</p>
							<p class="contentText">
								Cras consequat lectus vestibulum tortor pulvinar, quis euismod
								nisl varius. Ut eu laoreet ex. Aliquam erat volutpat. Nullam
								quis sagittis nibh. Morbi consectetur ultricies ante ac congue.
								Donec lorem erat, finibus in velit placerat, rutrum augue.
							</p>
						</div>
					</div>
					<div class="col-6">
						<p class="numeration">03</p>
					</div>
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
.rowGap {
	gap: 3rem;
}
.numeration {
	font-size: 6rem;
	font-weight: 100;
	color: $color-white;
	text-align: end;
}

.sectionTitle {
	color: rgb(165, 165, 165);
	font-size: 0.75rem;
}
.bottomConainerOne {
	padding-left: 30%;
	.contentText {
		color: $color-white;
		font-size: 1.1rem;
	}
}
.bottomConainerTwo {
	.contentText {
		color: $color-white;
		font-size: 1.1rem;
	}
}
.bottomConainerThree {
	.contentText {
		color: $color-white;
		font-size: 1.1rem;
	}
	padding-right: 30%;
}

h2 {
	color: $color-white;
	font-family: "DM Serif Text", serif;
	font-size: 3rem;
	font-weight: 900;
	position: relative;
	padding-right: 22.5%;
}

.blockOne {
	background-image: url("../../../public/images/bakery-process-1.jpg");
	background-size: cover;
	background-position: center;
	position: relative;
	height: 100%;
	background-position: left;

	aspect-ratio: 2/1;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.25),
			rgba(0, 0, 0, 0.5)
		);
		z-index: 1;
	}
}

.blockTwo,
.blockTwoRight {
	flex: 1; /* Occupa lo stesso spazio, mantenendo l'allineamento sulla stessa linea */
	min-width: 0; /* Previene l'overflow */
}

.blockTwo {
	background-image: url("../../../public/images/bakery-process-2.jpg");
	background-size: cover;
	background-position: center;
	position: relative;
	height: 100%;
	background-position: right;
	aspect-ratio: 1/1;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.25),
			rgba(0, 0, 0, 0.5)
		);
		z-index: 1;
	}
}
.blockTwoRight {
	background-color: $color-light-3;
	background-size: cover;
	background-position: center;
	position: relative;
	height: 100%;
	background-position: right;
	aspect-ratio: 1/1;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;

	.row {
		padding: 10%;
	}

	p {
		color: rgb(135, 135, 135);
	}

	.credits {
		text-transform: capitalize;
		font-size: 1rem;
	}
	h2 {
		color: $color-primary;
	}
}

.blockThree {
	background-image: url("../../../public/images/bakery-process-3.jpg");
	background-size: cover;
	background-position: center;
	position: relative;
	height: 100%;
	background-position: center;
	aspect-ratio: 2/1;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.25),
			rgba(0, 0, 0, 0.5)
		);
		z-index: 1;
	}
}
</style>
