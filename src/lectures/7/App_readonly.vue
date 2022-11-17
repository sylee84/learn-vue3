<template>
	<div></div>
</template>

<script>
import { reactive, readonly, ref } from 'vue';
export default {
	setup() {
		const count = ref(0);
		const original = reactive({
			count,
		});
		const copy = readonly(original);
		original.count++;
		copy.count++;
		console.log(original.count);
		console.log(copy.count);
		return { original, copy };
	},
};
</script>

<style lang="scss" scoped></style>
