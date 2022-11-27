<template>
	<main>
		<div class="container py-4">
			<PostCreate @createPost="createPost"></PostCreate>

			<hr class="my-4" />

			<div class="row g-3">
				<div class="col-4" v-for="list in lists" :key="list.id">
					<PostItem
						:title="list.title"
						:contents="list.contents"
						:type="list.type"
						:is-like="list.isLike"
						@toggle-like="list.isLike = !list.isLike"
					/>
				</div>
			</div>

			<hr class="my-4" />

			<!-- <LabelInput
				:modelValue="username"
				@update:modelValue="value => (username = value)"
			></LabelInput> -->
			<LabelInput v-model="username" label="이름"></LabelInput><br />
			<LabelTitle v-model:title="username" label="제목"></LabelTitle>
			<UserName
				v-model:firstname="firstname"
				v-model:lastname="lastname"
			></UserName>
		</div>
	</main>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
import PostCreate from '@/components/PostCreate.vue';
import LabelInput from '@/components/LabelInput.vue';
import LabelTitle from '@/components/LabelTitle.vue';
import UserName from '@/components/UserName.vue';
import { reactive, ref } from 'vue';
export default {
	components: { PostItem, PostCreate, LabelInput, LabelTitle, UserName },
	setup() {
		// const post = reactive({
		// 	title: 'title2',
		// 	constents: 'contents2',
		// });
		// <div class="col-4">
		//   <AppCard v-bind:title="post.title" :contents="post.constents" />
		// </div>

		const lists = reactive([
			{
				id: 1,
				title: 'title1',
				contents: 'contents1',
				type: 'news',
				isLike: true,
			},
			{
				id: 2,
				title: 'title2',
				contents: 'contents2222',
				type: 'notice',
				isLike: true,
			},
			{
				id: 3,
				title: 'title3',
				contents: 'contents3',
				type: 'news',
				isLike: false,
			},
			{
				id: 4,
				title: 'title4',
				contents: 'contents4',
				type: 'news',
				isLike: true,
			},
			{
				id: 5,
				title: 'title5',
				contents: 'contents5',
				type: 'notice',
				isLike: false,
			},
			{
				id: 6,
				title: 'title6',
				contents: 'contents6',
				type: 'news',
				isLike: true,
			},
		]);
		const createPost = newPost => {
			console.log('newPost :', newPost);
			lists.push(newPost);
		};

		const username = ref('');
		const firstname = ref('');
		const lastname = ref('');
		// return { post };
		return { lists, createPost, username, firstname, lastname };
	},
};
</script>

<style lang="scss" scoped></style>
