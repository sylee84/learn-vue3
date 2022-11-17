<template>
	<div class="modifiers">
		<div @click="divClick">
			DIV
			<p @click.stop.self="pClick">
				P
				<span @click.stop="spanClick"> SPAN </span>
				<a href="https://www.naver.com" @click.prevent.stop="click">네이버</a>
			</p>
		</div>
	</div>
	<hr />
	<div class="modifiers">
		<div @click.capture="divClick">
			DIV
			<p @click.capture="pClick">
				P
				<span @click="spanClick"> SPAN </span>
			</p>
		</div>
	</div>
	<hr />
	<button type="button" @click.once="divClick">once</button>
</template>

<script>
export default {
	setup() {
		const divClick = () => {
			console.log('div');
			alert('가자~');
		};
		const pClick = () => {
			console.log('p');
		};
		const spanClick = () => {
			console.log('span');
			alert('좋아요');
		};
		const click = () => {
			alert('안가~');
		};
		return { divClick, pClick, spanClick, click };
	},
};
</script>

<style scoped>
.modifiers * {
	padding: 20px;
}
.modifiers div {
	background-color: #ccc;
}
.modifiers p {
	background-color: #ddd;
}
.modifiers span {
	display: block;
	background-color: #eee;
}
</style>
