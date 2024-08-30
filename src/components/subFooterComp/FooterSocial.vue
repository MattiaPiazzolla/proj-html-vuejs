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
	font-size: 1rem;
	font-weight: 300;
	margin-left: 35px;
	display: inline-block;

	&:hover i {
		transform: scale(1.2);
	}
}

i {
	transition: transform 0.25s ease-in;
}
</style>
