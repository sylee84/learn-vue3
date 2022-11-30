<template>
	<div class="container py-4">
		{{ msg }}
		<button type="button" @click="sayHello">click</button>
		<hr />
		{{ message }}
		<input type="text" v-model="message" />
		<hr />
		<PostItem
			type="news"
			title="제목"
			contents="내용"
			:isLike="false"
		></PostItem>
		<PostItem
			type="news"
			title="제목"
			contents="내용"
			:isLike="false"
		></PostItem>
		<PostItem
			type="news"
			title="제목"
			contents="내용"
			:isLike="false"
		></PostItem>
		<hr />
		<TemplateRefsChild ref="child"></TemplateRefsChild>
		<template v-if="child">{{ child.message }}</template>
		<hr />
		<MyButton class="parent-class"></MyButton>
	</div>
</template>

<script setup>
import PostItem from '@/components/setup/PostItem.vue';
import TemplateRefsChild from '@/components/setup/TemplateRefsChild.vue';
import MyButton from '@/components/setup/MyButton.vue';
import axios from 'axios';
import { ref } from 'vue';

const msg = 'hello vue';
const message = ref('');
const sayHello = () => {
	alert(msg);
};
const child = ref(null);
defineExpose({ msg });

const response = await axios(
	'https://dummy.restapiexample.com/api/v1/employees',
);
console.log(response);
// function callApi() {
// 	axios('https://dummy.restapiexample.com/api/v1/employees').then(response => {
// 		console.log(response);
// 	});
// }
// async function callApi() {
// 	const response = await axios(
// 		'https://dummy.restapiexample.com/api/v1/employees',
// 	).then(response => {
// 		console.log(response);
// 	});
// }
// callApi();
</script>

<style lang="scss" scoped></style>
