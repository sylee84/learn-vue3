<template>
	<div>
		<h2>{{ teacter.name }}</h2>
		<h3>강의가 있습니다까?</h3>
		<p>{{ hasLecture }}</p>
		<h2>이름</h2>
		<p>{{ fullName }}</p>
	</div>
</template>

<script>
import { reactive, computed, ref } from 'vue';
export default {
	setup() {
		const teacter = reactive({
			name: '이선생',
			lectures: ['HTML/CSS', 'javascript', 'vue3'],
		});
		// const hasLecture = computed(() => {
		// 	return teacter.lectures.length ? 'yes😀' : 'no😢';
		// });
		const hasLecture = computed(() =>
			teacter.lectures.length ? 'yes😀' : 'no😢',
		);

		const firstName = ref('이');
		const lastName = ref('시형');

		const fullName = computed({
			get() {
				return firstName.value + ' ' + lastName.value;
			},
			set(value) {
				console.log(value);
				console.log(value.split(' '));
				[firstName.value, lastName.value] = value.split(' ');
			},
		});

		console.log(fullName.value);

		fullName.value = '이 상윤';

		return { teacter, hasLecture, fullName };
	},
};
</script>

<style lang="scss" scoped></style>
