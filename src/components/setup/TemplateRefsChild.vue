<template>
	<div>{{ $parent }}</div>
	<ul>
		<li v-for="fruit in $parent.fruits" :key="fruit">
			{{ fruit }}
		</li>
	</ul>
</template>

<script setup>
import { ref } from 'vue';
const message = ref('child hello vue');
const sayHello = () => {
	console.log(message.value + '!!!');
};
defineExpose({
	message,
	sayHello,
});
</script>

<style lang="scss" scoped></style>
