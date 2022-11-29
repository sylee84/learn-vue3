<template>
	<div class="container py-4">
		<input type="text" ref="input" />
		<p>{{ input }}</p>
		<p v-if="input">
			{{ input.value }} {{ $refs.input.value }} {{ input === $refs.input }}
		</p>
		<hr />
		<ul>
			<!-- <li v-for="(fruit, idx) in fruits" ref="itemRef" :key="idx">
				{{ fruit }}
			</li> -->
			<li
				v-for="(fruit, idx) in fruits"
				:key="idx"
				:ref="el => itemRef.push(el.textContent)"
			>
				{{ fruit }}
			</li>
		</ul>
		<hr />
		<TemplateRefsChild ref="child"></TemplateRefsChild>
	</div>
</template>

<script>
import TemplateRefsChild from '@/components/TemplateRefsChild.vue';
import { onMounted, ref } from 'vue';
export default {
	components: {
		TemplateRefsChild,
	},
	setup() {
		const input = ref(null);
		console.log(input.value);
		onMounted(() => {
			input.value.value = 'hello vue';
			console.log(input.value);
			// itemRef.value.forEach(item => {
			// 	console.log(item);
			// });
			itemRef.value.forEach(item => {
				console.log(item);
			});
			console.log(child.value.message);
			child.value.sayHello();
		});

		const fruits = ref(['사과', '포도', '딸기']);
		const itemRef = ref([]);
		const child = ref(null);
		return { input, fruits, itemRef, child };
	},
};
</script>

<style scoped></style>
