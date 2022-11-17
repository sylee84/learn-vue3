<template>
	<div>
		<p v-text="message"></p>
		<p v-html="htmlStr"></p>
		<p v-text="htmlStr"></p>
		<p v-pre>{{ message }}</p>
		<p v-once>{{ message }}</p>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const message = ref('안녕하세요!');
		const htmlStr = ref('<strong>안녕!</strong>');
		return { message, htmlStr };
	},
};
</script>

<style lang="scss" scoped></style>
