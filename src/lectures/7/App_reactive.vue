<template>
	<div>
		<button type="button" v-on:click="increment">
			증가 {{ status.count }}
		</button>
		<button type="button" v-on:click="increment">
			Deep 증가 {{ status.deep.count }}
		</button>
	</div>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
	setup() {
		const status = reactive({
			count: ref(0),
			deep: {
				count: ref(0),
			},
		});
		const increment = () => {
			status.count++;
			status.deep.count++;
		};
		return {
			status,
			increment,
		};
	},
};
</script>

<style lang="scss" scoped></style>
