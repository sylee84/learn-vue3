<template>
	<div>
		<form action="" @submit.prevent="save(title, contents)">
			<input type="text" v-model.lazy="title" placeholder="title" /><br />
			<textarea v-model.lazy="contents" placeholder="contents"></textarea>
			<hr />
			<button>버튼</button>
			<button>버튼</button>
		</form>
		<br />
		<br />
		<br />
		<form @submit.prevent>
			<input type="text" v-model.lazy="title" placeholder="title" /><br />
			<textarea v-model.lazy="contents" placeholder="contents"></textarea>
			<hr />
			<button>버튼</button>
			<button @click="save(title, contents)">버튼</button>
		</form>
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';
export default {
	setup() {
		const title = ref('');
		const contents = ref('');

		// watch((title, contents), (newT, newC) => {
		// 	console.log(newT, newC);
		// });

		const save = (title, contents) => {
			console.log(`저장 ${title} ${contents}`);
		};

		watchEffect(() => {
			save(title.value, contents.value);
		});
		return { title, contents, save };
	},
};
</script>

<style lang="scss" scoped></style>
