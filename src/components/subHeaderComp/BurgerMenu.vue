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
	margin: 15px 0;
	text-align: center;
	a {
		color: $color-white;
		text-decoration: none;
		font-size: 1.1rem;
		font-weight: 500;
		white-space: nowrap;

		&:hover {
			border-bottom: 2px solid $color-light-2;
			padding-bottom: 5px;
		}
	}

	.selected {
		border-bottom: 2px solid $color-white !important;
		padding-bottom: 5px;
	}
}
</style>
