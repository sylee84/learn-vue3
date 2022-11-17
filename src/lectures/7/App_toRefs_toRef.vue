<template>
	<div>
		<p>author : {{ author }}</p>
		<p>description : {{ description }}</p>
		<p>year : {{ year }}</p>
	</div>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue';
export default {
	setup() {
		// ref -> destructure
		const book = reactive({
			author: 'vue3',
			year: '2022',
			title: 'vue3 guide',
			description: '다시해보자!',
			price: '무료',
		});
		const { author, description } = toRefs(book);
		const year = toRef(book, 'year');

		return {
			author,
			description,
			year,
			book,
		};
	},
};
</script>

<style lang="scss" scoped></style>
