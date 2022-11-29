<template>
	<div class="card">
		<div class="card-header">Deep Child Components</div>
		<div class="card-body">
			<p>{{ defaultMessage }}</p>
			<p>{{ staticMessage }}</p>
			<p>{{ message }}</p>
			<p>{{ count }}</p>
		</div>
	</div>
</template>

<script>
import { inject } from 'vue';
export default {
	setup() {
		const defaultMessage = inject('default-message', 'default');
		const staticMessage = inject('static-message');
		const { message, updateMessage } = inject('message');
		updateMessage('!!!');
		message.value = message.value + '!';
		const count = inject('count');
		return { defaultMessage, staticMessage, message, count };
	},
};
</script>

<style lang="scss" scoped></style>
