<template>
	<div>{{ $parent }}</div>
	<ul>
		<li v-for="fruit in $parent.fruits" :key="fruit">
			{{ fruit }}
		</li>
	</ul>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const message = ref('child hello vue');
		const sayHello = () => {
			console.log(message.value + '!!!');
		};
		return { message, sayHello };
	},
};
</script>

<style lang="scss" scoped></style>
