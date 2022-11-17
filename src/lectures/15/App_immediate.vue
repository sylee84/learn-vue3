<template>
	<div>
		<p>{{ message }}</p>
		<p>{{ reverseMessage }}</p>
	</div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
	setup() {
		const message = ref('Hello Vue3');
		const reverseMessage = ref('');

		const reverseFunction = newValue => {
			reverseMessage.value = newValue.split('').reverse().join('');
			console.log(message, reverseMessage);
		};
		watch(message, reverseFunction, {
			// 최초진입시 실행
			immediate: true,
		});
		return { message, reverseMessage };
	},
};
</script>

<style lang="scss" scoped></style>
