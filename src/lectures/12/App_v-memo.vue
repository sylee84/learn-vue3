<template>
	<div v-memo="[subscriber]">
		<p>subscriber {{ subscriber }}</p>
		<p>views {{ views }}</p>
		<p>likes {{ likes }}</p>

		<button @click="subscriber++">s+</button>
		<button @click="views++">v+</button>
		<button @click="likes++">l+</button>
	</div>

	<div>
		<p>subscriber {{ subscriber }}</p>
		<p>views {{ views }}</p>
		<p>likes {{ likes }}</p>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const subscriber = ref(4000);
		const views = ref(400);
		const likes = ref(20);
		return { subscriber, views, likes };
	},
};
</script>

<style lang="scss" scoped></style>
