<template>
	<div>
		<h2 v-if="visible">Hi Vue3</h2>
		<h2 v-else>Hello Vue3</h2>
		<button type="button" @click="visible = !visible">toggle</button>
		<hr />
		<h2 v-if="type === 'A'">A type</h2>
		<h2 v-else-if="type === 'B'">B type</h2>
		<h2 v-else-if="type === 'C'">C type</h2>
		<h2 v-else>D type</h2>
		<button type="button" @click="type = 'A'">A</button>
		<button type="button" @click="type = 'B'">B</button>
		<button type="button" @click="type = 'C'">C</button>
		<button type="button" @click="type = 'D'">D</button>
		<hr />
		<template v-if="visible">
			<h1>title</h1>
			<p>pragraph 1</p>
			<p>pragraph 2</p>
		</template>
		<hr />
		<!-- style display -->
		<h1 v-show="ok">제목</h1>
		<button type="button" @click="ok = !ok">show toggle</button>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const visible = ref(true);
		const type = ref('A');
		const ok = ref(true);
		return { visible, type, ok };
	},
};
</script>

<style lang="scss" scoped></style>
