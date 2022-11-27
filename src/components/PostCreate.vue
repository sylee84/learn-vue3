<template>
	<div class="row g-3">
		<div class="col col-2">
			<select
				v-model="type"
				class="form-select"
				aria-label="Default select example"
			>
				<option value="NEWS" selected>NEWS</option>
				<option value="notice">notice</option>
			</select>
		</div>
		<div class="col col-8">
			<input type="text" class="form-control" v-model="title" />
		</div>
		<div class="col col-2 d-grid">
			<!-- <button
			type="button"
			class="btn btn-primary"
			@click="$emit('createPost', 1, 2, 3, '이상윤')"
		> -->
			<button type="button" class="btn btn-primary" @click="createPost">
				add
			</button>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	// emits: ['createPost'],
	emits: {
		// createPost: null,
		createPost: newPost => {
			if (!newPost.type) {
				return false;
			} else if (!newPost.title) {
				return false;
			}
			return true;
		},
	},
	setup(props, { emit }) {
		const title = ref('');
		const type = ref('NEWS');
		const createPost = () => {
			const newPost = {
				type: type.value,
				title: title.value,
			};
			emit('createPost', newPost);
			(type.value = 'NEWS'), (title.value = '');
		};
		return { createPost, title, type };
	},
};
</script>

<style lang="scss" scoped></style>
