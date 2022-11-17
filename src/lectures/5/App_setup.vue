<template>
	<div>
		<p>{{ count }}</p>
		<p>{{ message }}</p>
		<button type="button" v-on:click="increment">증가</button>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const count = ref('0');
		const message = ref('hello vue!');
		const increment = () => {
			count.value++;
		};
		return {
			count,
			message,
			increment,
		};
	},
};
</script>

<style lang="scss" scoped></style>
