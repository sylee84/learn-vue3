<template>
	<main>
		<div class="container py-4">
			<div class="row g-3">
				<div class="col-4" v-for="list in lists" :key="list.id">
					<AppCard
						:title="list.title"
						:contents="list.contents"
						:type="list.type"
						:is-like="list.isLike"
						@toggle-like="list.isLike = !list.isLike"
					/>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import AppCard from '@/components/AppCard.vue';
import { reactive } from 'vue';
export default {
	components: { AppCard },
	setup() {
		const post = reactive({
			title: '제목2',
			constents: '내용2',
		});
		// <div class="col-4">
		//   <AppCard v-bind:title="post.title" :contents="post.constents" />
		// </div>

		const lists = reactive([
			{ id: 1, title: '제목1', contents: '내용1', type: 'news', isLike: true },
			{
				id: 2,
				title: '제목2',
				contents: '내용2',
				type: 'notice',
				isLike: true,
			},
			{ id: 3, title: '제목3', contents: '내용3', type: 'news', isLike: false },
			{ id: 4, title: '제목4', contents: '내용4', type: 'news', isLike: true },
			{
				id: 5,
				title: '제목5',
				contents: '내용5',
				type: 'notice',
				isLike: false,
			},
			{ id: 6, title: '제목6', contents: '내용6', type: 'news', isLike: true },
		]);
		return { post, lists };
	},
};
</script>

<style lang="scss" scoped></style>
