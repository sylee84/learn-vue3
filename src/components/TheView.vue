<template>
	<main>
		<DynamicComponent />
	</main>
</template>

<script>
import DynamicComponent from '@/components/DynamicComponent.vue';
export default {
	components: {
		DynamicComponent,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
