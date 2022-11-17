<template>
	<div>
		<h2>보간법</h2>
		<p>{{ message }}</p>
		<p v-once>{{ message }}</p>
		<button type="button" v-on:click="message = message + '!'">!증가</button>
		<hr />
		<h2>HTML</h2>
		<p v-html="rowHtml"></p>
		<hr />
		<h2>속성바인딩</h2>
		<p v-bind:title="dynamicTitle">마우스를 올려보세요</p>
		<input type="text" value="이상윤" :disabled="isInputDisabled" />
		<input v-bind="attre" />
		<h2>javascript</h2>
		<p>{{ message.split('').reverse('').join('') }}</p>
		<p>{{ isInputDisabled ? 'yes' : 'no' }}</p>
	</div>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
	setup() {
		const message = ref('안녕하세요!');
		const rowHtml = ref('<strong>안녕하세요!</strong>');

		const dynamicTitle = ref('안녕하세요!@@@');
		const isInputDisabled = ref(true);
		const attre = reactive({
			type: 'text ',
			value: '123456',
			disabled: true,
		});
		return {
			message,
			rowHtml,
			dynamicTitle,
			isInputDisabled,
			attre,
		};
	},
};
</script>

<style lang="scss" scoped></style>
