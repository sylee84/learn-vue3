<template>
	<div></div>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
	setup() {
		// ref -> object
		const count = ref(0);
		const status = reactive({
			count,
		});
		count.value++;
		count.value++;
		console.log(status.count);

		// ref -> array
		const message = ref('안녕하세요');
		const arr = reactive([message]);
		console.log(arr[0].value);

		// ref -> destructure
		const book = reactive({
			author: 'vue',
			year: '2022',
			title: 'vue3 guide',
			description: '다시해보자!',
			price: '무료',
		});
		let { year, price } = book;
		console.log(year, price);

		return {
			status,
			message,
			arr,
			book,
		};
	},
};
</script>

<style lang="scss" scoped></style>
