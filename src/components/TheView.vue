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
			title: 'title2',
			constents: 'contents2',
		});
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
		return { post, lists };
	},
};
</script>

<style lang="scss" scoped></style>
