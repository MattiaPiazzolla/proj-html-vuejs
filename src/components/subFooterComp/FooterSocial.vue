<script>
export default {
	props: {
		social: Object,
	},
};
</script>

<template>
	<a :href="social.link">
		<i :class="social.icon"></i>
	</a>
</template>

<style lang="scss" scoped>
@import "../../styles/generals.scss";
a {
	color: $color-primary !important;
	text-decoration: none;
	font-size: 1.5rem;
	font-weight: 300;
	margin-left: 15px;
	display: inline-block;

	&:hover i {
		transform: scale(1.2);
	}
	@media (min-width: 992px) {
		margin-left: 35px;
	}
}

i {
	transition: transform 0.25s ease-in;
}
</style>
