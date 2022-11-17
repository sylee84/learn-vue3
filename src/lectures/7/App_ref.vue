<template>
	<div>
		<p>{{ message }}</p>
		<button type="button" @:click="addMessage">increment</button>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		let message = ref('안녕하세요');
		const addMessage = () => {
			message.value = message.value + '!';
		};
		return {
			message,
			addMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
