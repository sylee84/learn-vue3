<template>
	<div class="card">
		<div class="card-header">Child Components</div>
		<div class="card-body">
			<p>App에서 {{ appMessage }}</p>
			<DeepChild></DeepChild>
		</div>
	</div>
</template>

<script>
import DeepChild from '@/components/DeepChild.vue';
import { inject } from 'vue';
export default {
	components: {
		DeepChild,
	},
	setup() {
		const appMessage = inject('app-message');
		return { appMessage };
	},
};
</script>

<style lang="scss" scoped></style>
