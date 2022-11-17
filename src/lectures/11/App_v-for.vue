<template>
	<div>
		<ul>
			<template v-for="(item, index) in evenItems" :key="index">
				<!-- <li v-if="item.id % 2 === 0">{{ item.id }}. {{ item.message }}</li> -->
				<li>{{ item.id }}. {{ item.message }}</li>
			</template>
		</ul>
		<!-- <button type="button" @click="type === items">all</button>
		<button type="button" @click="type === oddItems">odd</button>
		<button type="button" @click="type === evenItems">even</button> -->
		<hr />
		<ul>
			<li v-for="(value, key, index) in myObject" :key="key">
				{{ index }}-{{ key }}-{{ value }}
			</li>
		</ul>
	</div>
</template>

<script>
import { computed, reactive } from 'vue';
export default {
	setup() {
		const items = reactive([
			{ id: 1, message: 'Vue3' },
			{ id: 2, message: 'HTML' },
			{ id: 3, message: 'CSS' },
			{ id: 4, message: 'JavaScript' },
		]);

		const myObject = reactive({
			id: 1,
			title: '제목',
			description: '내용',
		});

		const oddItems = computed(() => items.filter(item => item.id % 2 === 1));
		const evenItems = computed(() => items.filter(item => item.id % 2 === 0));
		return { items, oddItems, evenItems, myObject };
	},
};
</script>

<style scoped>
ul {
	list-style: none;
}
</style>
