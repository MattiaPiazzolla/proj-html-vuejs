<script>
export default {
	props: {
		item: Object,
	},
};
</script>

<template>
	<li>
		<a
			:href="item.link"
			class="text-uppercase"
			:class="{ selected: item.selected }">
			<i v-if="item.icon" :class="item.icon"></i>
			{{ item.name }}
		</a>
	</li>
</template>

<style lang="scss" scoped>
@import "../../styles/generals.scss";
li {
	margin: 0 15px;

	a {
		color: $color-primary;
		text-decoration: none;
		font-size: 0.75rem;
		font-weight: 500;
		white-space: nowrap;

		&:hover {
			border-bottom: 2px solid $color-white;
			padding-bottom: 5px;
		}
	}

	.selected {
		border-bottom: 2px solid $color-primary !important;
		padding-bottom: 5px;
	}
}
</style>
