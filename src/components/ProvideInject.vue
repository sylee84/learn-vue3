<template>
	<div class="container py-4">
		<div class="card">
			<div class="card-header">ProvideInject Components</div>
			<div class="card-body">
				<p>App에서 {{ appMessage }}</p>
				<button type="button" @click="count++">+</button>
				<Child></Child>
			</div>
		</div>
	</div>
</template>

<script>
import Child from '@/components/Child.vue';
import { provide, ref, readonly, inject } from 'vue';
export default {
	components: {
		Child,
	},
	setup() {
		// const defaultMessage = 'default message';
		const staticMessage = 'static message';
		const message = ref('message');
		const updateMessage = appendMessage => {
			message.value = message.value + appendMessage;
		};
		const count = ref(10);
		// provide('default-message', defaultMessage);
		provide('static-message', staticMessage);
		provide('message', { message: readonly(message), updateMessage });
		provide('count', count);

		const msg = inject('msg');
		console.log(msg);

		const appMessage = inject('app-message');
		return { count, appMessage };
	},
	mounted() {
		console.log('App:this.msg', this.msg);
	},
};
</script>

<style lang="scss" scoped></style>
