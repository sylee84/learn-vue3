<template>
	<div></div>
</template>

<script>
import { reactive, ref, watch } from 'vue';
export default {
	setup() {
		const x = ref(0);
		const y = ref(0);

		// watch(
		// 	() => x.value + y.value,
		// 	(sum, old) => {
		// 		console.log(sum);
		// 		console.log(old);
		// 	},
		// );
		watch([x, y], ([newX, newY]) => {
			console.log(newX, newY);
		});

		const obj = reactive({
			count: 0,
		});
		// 단일
		// watch(
		// 	() => obj.count,
		// 	(newValue, oldValue) => {
		// 		console.log(newValue);
		// 	},
		// );
		// 객체일 경우 newValue 와 oldValue 값이 동일 하다
		// watch(obj, (newValue, oldValue) => {
		// 	console.log(newValue);
		// 	console.log(oldValue);
		// });

		const person = reactive({
			name: '이상윤',
			age: 39,
			hobby: '요리,운동',
			obj: {
				count: 0,
			},
		});
		// watch(person, newValue => {
		// 	console.log(newValue);
		// });

		// getter로 받을경우 getter값 자체가 바뀌어애만 값이 출력
		watch(
			() => person.obj,
			newValue => {
				console.log(newValue);
			},
		);
		return { x, y, obj, person };
	},
};
</script>

<style lang="scss" scoped></style>
