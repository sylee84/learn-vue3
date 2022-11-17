<template>
	<div>
		<p>{{ message }}</p>
		<button type="button" @click="message = 'Hi vue3'">버튼</button>
	</div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
	setup() {
		const message = ref('Hello vue3');

		watch(message, (newValue, oldValue) => {
			console.log(newValue);
			console.log(oldValue);
		});
		return { message };
	},
};
</script>

<style lang="scss" scoped></style>
