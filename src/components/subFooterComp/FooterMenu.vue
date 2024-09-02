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
			<span v-if="item.icon" class="countChar ms-2">0</span>
			{{ item.name }}
		</a>
	</li>
</template>

<style lang="scss" scoped>
@import "../../styles/generals.scss";
li {
	margin-right: 2.5px;
	@media (min-width: 768px) {
		margin-right: 15px;
	}

	a {
		color: $color-primary;
		text-decoration: none;
		font-size: 0.5rem;
		font-weight: 300;

		&:hover {
			border-bottom: 2px solid $color-light-3;
			padding-bottom: 5px;
		}
		@media (min-width: 768px) {
			font-size: 0.75rem;
		}
	}
	.countChar {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		font-size: 0.65rem;
		background-color: $color-light-3;
		padding: 2.5px;
		border-radius: 100%;
		aspect-ratio: 1/1;
		width: 17.5px;
		height: 17.5px;
	}
}
</style>
