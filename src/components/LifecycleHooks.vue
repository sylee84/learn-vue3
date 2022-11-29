<template>
	<div class="container py-4">
		<input type="text" ref="inputRef" value="hello vue" />
		<hr />
		<button type="button" @click="visible = !visible">toggle</button>
		<LifecycleChild v-if="visible"></LifecycleChild>
		<p id="message">{{ message }}</p>
	</div>
</template>

<script>
import LifecycleChild from '@/components/LifecycleChild.vue';
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
export default {
	components: {
		LifecycleChild,
	},
	setup() {
		console.log('setup');
		const inputRef = ref(null);
		const message = ref('');
		const visible = ref(false);
		onBeforeMount(() => {
			console.log('onBeforeMount', inputRef.value);
		});
		onMounted(() => {
			console.log('onMounted', inputRef.value.value);
		});
		onBeforeUpdate(() => {
			console.log('onBeforeUpdate', message.value);
			console.log(
				'Dom contents : ',
				document.querySelector('#message').textContent,
			);
		});
		onUpdated(() => {
			console.log('onUpdated', message.value);
			console.log(
				'Dom contents : ',
				document.querySelector('#message').textContent,
			);
		});
		return { inputRef, message, visible };
	},
	// beforeCreate() {
	// 	console.log('beforeCreate');
	// },
	// created() {
	// 	console.log('created');
	// },
};
</script>

<style lang="scss" scoped></style>
